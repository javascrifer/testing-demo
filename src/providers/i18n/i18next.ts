import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { Environment, Language } from '../../types';

const env = process.env as Environment;

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: env.REACT_APP_USE_I18N_DEBUG === 'true',
    backend: { loadPath: '/locales/{{lng}}.json' },
    lng: Language.English,
    fallbackLng: [Language.English],
    react: { useSuspense: true },
    interpolation: { escapeValue: false },
  });

export default i18next;
