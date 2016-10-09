// import { View } from 'aurelia-framework';
import { RouteConfig, NavigationInstruction, Redirect } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { UserService } from '../resources/services/user-service';

@autoinject()
export class Start {

  /******* Component Lifecycle *******/

  constructor(private userService: UserService) {


  }

  // created(owningView: View, myView: View) {

  // }

  // bind(bindingContext: Object, overrideContext: Object) {

  // }

  // attached() {

  // }

  // detached() {

  // }

  // unbind() {

  // }

  /*******  Activation Lifecycle *******/
  // => http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/cheat-sheet/7

  // canActivate(params: any, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
  //   if (!this.getUser().hasAnyRoom()) {
  //     return new Promise((resolve, reject) => {
  //       this.aurelia.setRoot('rooms/first-room').then(() => {
  //         resolve(false);
  //       });
  //     })
  //     //return new Redirect('/first-room');
  //   }
  //   return Promise.resolve(true);
  // }

  // activate(params: any, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
  //   this.params = params;
  // }

  // canDeactivate() {

  // }

  // deactivate() {

  // }

}
