import { Aurelia } from 'aurelia-framework'
import environment from './environment';
import 'material-design-lite';

// import { I18N } from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';
import * as LanguageDetector from 'i18next-browser-languagedetector';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.plugin('aurelia-mdl-plugin');
  // aurelia.use.plugin('aurelia-mdl-plugin', m => m.autoUpgrade(false));
  //register the plugin
  aurelia.use.plugin('aurelia-i18n', (instance) => {
    // register backend plugin
    instance.i18next
      .use(Backend)
      .use(LanguageDetector);

    return instance.setup({
      backend: {
        loadPath: './locales/{{lng}}/{{ns}}.json',
      },
      whitelist: ['de-DE', 'en-US', 'en-UK', 'en', 'de'],
      nonExplicitWhitelist: true,
      attributes: ['t', 'i18n'],
      fallbackLng: false,
      debug: false,
      load: 'languageOnly'
    });
  });

  if (environment.debug) {
    //Clears all the local storage data
    // window.localStorage.clear();

    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot('shell/shell'));
}

/** From MDL */
declare var componentHandler: any;
