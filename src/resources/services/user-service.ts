import { autoinject } from 'aurelia-framework'
import { UserModel } from '../models/user-model';
import { LocalStorageService } from './local-storage-service'
import * as UUID from 'node-uuid';
import * as Collections from 'typescript-collections';
import { Aurelia } from 'aurelia-framework'

const USERSTOREAGEIDENTIFIER: string = 'user';

@autoinject()
export class UserService {
  public currentUser: UserModel = null;


  constructor(private localStorageService: LocalStorageService, private aurelia: Aurelia) {

  }

  public PersistUser(onlyWhenExist: boolean = false) {
    if (onlyWhenExist) {
      let persistedUser = this.localStorageService.getItem<UserModel>(USERSTOREAGEIDENTIFIER);
      if (!persistedUser) { return; }
    }
    this.localStorageService.setItem(USERSTOREAGEIDENTIFIER, this.currentUser);
  }


  private LoadOrCreateNew() {
    this.currentUser = this.LoadUser();
    if (!this.currentUser) {
      this.currentUser = this.CreateNewUser();
      this.PersistUser();
    }
  }

  private LoadUser(): UserModel {
    let user: UserModel = null;
    let localStorageUser = this.localStorageService.getItem<UserModel>(USERSTOREAGEIDENTIFIER);
    if (localStorageUser) {
      user = new UserModel();
      Object.assign(user, localStorageUser);
    }
    return user;
  }

  private CreateNewUser(): UserModel {
    let user = new UserModel();
    user.privateId = UUID.v4();
    user.publicId = UUID.v4();

    return user;
  }

  public LoadOrCreateUserAndRegisterUserToIocContainer() {
    // if user not loaded and registered
    if (this.currentUser === null) {
      // load an existing user or create a new one
      this.LoadOrCreateNew();
      // add user as singleton to ioc container
      this.aurelia.container.registerSingleton(UserModel, () => this.currentUser);
    }
  }
}
