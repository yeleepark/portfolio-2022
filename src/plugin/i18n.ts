import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from '../locales/ko.json';
import en from '../locales/en.json';

const resources = {
  'en-US': {
    translation: en
  },
  'ko-KR': {
    translation: ko
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: 'ko-KR',
    fallbackLng: {
      'en-US': ['en-US'],
      default: ['ko-KR']
    },
    debug: true,
    defaultNS: 'translation',
    ns: 'translation',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });
