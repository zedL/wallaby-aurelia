import { I18N } from 'aurelia-i18n';

export class LocaleSelector {
  static inject = [I18N];

  constructor(private i18n) {
    this.setIsActiveLocale(this.i18n.getLocale());
  }

  public supportedLocales = [
    { flag: 'de', locale: 'de-DE', name: 'Deutsch', isActive: false },
    { flag: 'us', locale: 'en-US', name: 'English US', isActive: false },
    { flag: 'gb', locale: 'en-GB', name: 'English UK', isActive: false }
  ];

  setLocale(locale: string) {
    this.i18n.setLocale(locale);
    this.setIsActiveLocale(locale);
  }

  setIsActiveLocale(locale: string) {
    for (let sl of this.supportedLocales) {
      sl.isActive = sl.locale === locale;
    }
  }
}
