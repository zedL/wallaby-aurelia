import { LocaleSelector } from '../../src/resources/elements/locale-selector/locale-selector';

describe('locale-selector component', () => {

  it('setLocale should call i18n setLocale', () => {
    let locale;
    let i18n = {
      setLocale: (val) => {
        locale = val;
      },
      getLocale: () => {
        return 'de-DE';
      }
    };
    var ls = new LocaleSelector(i18n);
    ls.setLocale('en-US');
    expect(locale).toBe('en-US');
  });

  it('constructor should call setIsActiveLocal', () => {
    let i18n = {
      getLocale: () => {
        return 'de-DE';
      }
    };
    let ls = new LocaleSelector(i18n);
    var hit = ls.supportedLocales.find((e, i, a) => {
      return e.isActive === true;
    });
    expect(hit.locale).toBe('de-DE');
  });

  it('setIsActiveLocale should reset supportedLocales object.isActive flag', () => {
    let i18n = {
      getLocale: () => {
        return 'de-DE';
      }
    };
    let ls = new LocaleSelector(i18n);
    ls.setIsActiveLocale('en-GB')
    var hit = ls.supportedLocales.find((e, i, a) => {
      return e.isActive === true;
    });
    expect(hit.locale).toBe('en-GB');
  });
});
