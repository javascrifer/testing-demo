import React, { FC, Suspense } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import { Language } from '../../types';

i18next.init(
  {
    lng: Language.English,
    fallbackLng: [Language.English],
    resources: {
      [Language.English]: {},
    },
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
  },
  () => {}
);

export const I18nTestProvider: FC = ({ children }) => (
  <I18nextProvider i18n={i18next}>
    <Suspense fallback="loading...">{children}</Suspense>
  </I18nextProvider>
);
