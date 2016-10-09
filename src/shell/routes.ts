import { RouteConfig } from 'aurelia-router';

let routes: RouteConfig[] = [
  { route: [''], name: 'start', moduleId: '../start/start', nav: 1, settings: { thersOfUseOptIn: true, tTerm: 'start#topic' } },
  { route: 'app/settings', name: 'app-settings', moduleId: '../settings/app-settings', nav: 2, settings: { thersOfUseOptIn: true, tTerm: 'app-settings#topic' } },
  { route: 'landing', name: 'landing', moduleId: '../landing/landing', nav: 3, settings: {tTerm: 'landing#topic'} },
  { route: 'terms-of-use', name: 'terms-of-use', moduleId: '../terms-of-use/terms-of-use', nav: 4, settings: {tTerm: 'terms-of-use#topic'} },
  { route: 'imprint', name: 'imprint', moduleId: '../imprint/imprint', nav: 5, settings: {tTerm: 'imprint#topic'} }
];

export default routes;
