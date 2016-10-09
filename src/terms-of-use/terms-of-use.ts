import { autoinject } from 'aurelia-framework'
import { Router } from 'aurelia-router'
import { UserService } from '../resources/services/user-service';
import { TermsOfUseOptInService } from '../resources/services/terms-of-use-opt-in-service'
import { TermModel } from '../resources/models/term-model';

@autoinject()
export class TermsOfUse {
  public topicTerm: TermModel = { key: 'terms-of-use#topic' };

  constructor(
    private userService: UserService,
    public optInService: TermsOfUseOptInService,
    private router: Router) {

  }

  public accept() {
    // set accepted to session
    this.optInService.setTermsOfUseAccepted();

    // load or create and register user to ioc container
    this.userService.LoadOrCreateUserAndRegisterUserToIocContainer();

    // redirect back
    if (this.optInService.RedirectFragment) {
      this.router.navigate(this.optInService.RedirectFragment);
    }
  }



// bind() {
  //   this.setRandomBackgroundImage();
  // }


  // private setRandomBackgroundImage() {
  //   let countImages = 9;
  //   let randomImageNumber = Math.floor(Math.random() * countImages);
  //   let urlBackgroundImage = `url('/img/terms-of-use/tou-${randomImageNumber}.jpg')`;
  //   this.cardTitleElement.style.backgroundImage = urlBackgroundImage;
  // }
}
