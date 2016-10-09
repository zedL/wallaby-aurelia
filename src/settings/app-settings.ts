import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { TermModel } from '../resources/models/term-model';

@autoinject()
export class AppSettings {
  public topicTerm: TermModel = { key: 'app-settings#topic' };

  constructor(private router: Router) {

  }

  saveSettings() {
    this.router.navigateToRoute('start');
  }

}
