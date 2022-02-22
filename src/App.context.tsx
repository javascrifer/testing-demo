import React from 'react';
import { render } from '@testing-library/react';

import {
  I18nTestProvider,
  AnalyticsMockProvider,
  SubscriptionServiceMockProvider,
  analyticsBeforeAndAfter,
  subscriptionServiceBeforeAndAfter,
} from './testing/providers';
import App from './App';

export {
  analyticsMockService,
  subscriptionMockService,
} from './testing/providers';

export const beforeAndAfter = () => {
  analyticsBeforeAndAfter();
  subscriptionServiceBeforeAndAfter();
};

export const renderApp = () => {
  return render(
    <I18nTestProvider>
      <AnalyticsMockProvider>
        <SubscriptionServiceMockProvider>
          <App />
        </SubscriptionServiceMockProvider>
      </AnalyticsMockProvider>
    </I18nTestProvider>
  );
};
