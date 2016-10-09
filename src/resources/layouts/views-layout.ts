import { bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { TermModel } from '../../resources/models/term-model';

export class ViewsLayout {
  @bindable public router: Router;
  @bindable public topicTerm: TermModel;
}
