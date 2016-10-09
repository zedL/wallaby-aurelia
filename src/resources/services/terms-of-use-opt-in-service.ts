const TERMSOFUSEACCEPTED: string = 'TERMSOFUSEACCEPTED';

export class TermsOfUseOptInService {
  public RedirectRoute: string = 'terms-of-use';
  public RedirectFragment: string = null;
  public TermsOfUseAccepted: boolean = false;

  constructor() {
    this.TermsOfUseAccepted = this.hasTermsOfUseAccepted();
  }

  private hasTermsOfUseAccepted(): boolean {
    let hit = sessionStorage.getItem(TERMSOFUSEACCEPTED);
    if (hit) {
      return true;
    }
    return false;
  }

  public setTermsOfUseAccepted() {
    sessionStorage.setItem(TERMSOFUSEACCEPTED, 'true');
    this.TermsOfUseAccepted = true;
  }
}
