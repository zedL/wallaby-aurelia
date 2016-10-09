import routes from './routes';
import { Redirect, NavigationInstruction, Next, RouterConfiguration, Router } from 'aurelia-router';
import { autoinject, Aurelia } from 'aurelia-framework'
import { TermsOfUseOptInService } from '../resources/services/terms-of-use-opt-in-service'
import { UserService } from '../resources/services/user-service';

@autoinject()
export class Shell {
  private router: Router

  constructor(
    private userService: UserService,
    private optInService: TermsOfUseOptInService) {

    // save user model when user leaves the page
    window.onunload = () => {
      this.userService.PersistUser(true);
    }

    if (this.optInService.TermsOfUseAccepted) {
      this.userService.LoadOrCreateUserAndRegisterUserToIocContainer();
    }
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.options.pushState = true;
    config.options.root = '/';
    config.title = 'sharry';
    config.addAuthorizeStep(TermsOfUseOptInStep);
    config.map(routes);
  }

}

@autoinject()
class TermsOfUseOptInStep {

  constructor(private optInService: TermsOfUseOptInService) {

  }

  run(navigationInstructions: NavigationInstruction, next: Next): Promise<any> {
    if (navigationInstructions.getAllInstructions().some(i => i.config.settings.thersOfUseOptIn)) {
      if (!this.optInService.TermsOfUseAccepted) {
        this.optInService.RedirectFragment = navigationInstructions.fragment;
        let redirect = new Redirect(this.optInService.RedirectRoute);
        return next.cancel(redirect);
      }
    }
    if (!(navigationInstructions.config.name === 'terms-of-use')) {
      this.optInService.RedirectFragment = null;
    }
    return next();
  }
}
