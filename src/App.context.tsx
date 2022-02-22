import React from 'react';
import { render } from '@testing-library/react';

import {
  I18nTestProvider,
  AnalyticsMockProvider,
  analyticsBeforeAndAfter,
} from './testing/providers';
import App from './App';

export { analyticsMockService } from './testing/providers';

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
