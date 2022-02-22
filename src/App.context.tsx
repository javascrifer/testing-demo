import React from 'react';
import { render } from '@testing-library/react';

import { I18nTestProvider } from './testing/i18n-provider';
import {
  AnalyticsMockProvider,
  analyticsBeforeAndAfter,
} from './testing/analytics-provider';
import App from './App';

export { analyticsMockService } from './testing/analytics-provider';

export const beforeAndAfter = analyticsBeforeAndAfter;

export const renderApp = () => {
  return render(
    <I18nTestProvider>
      <AnalyticsMockProvider>
        <App />
      </AnalyticsMockProvider>
    </I18nTestProvider>
  );
};
