import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { I18nProvider } from './providers/i18n';
import { AnalyticsProvider } from './providers/analytics';
import { SubscriptionServiceProvider } from './providers/subscription-service';
import { googleAnalyticsService, subscriptionService } from './services';
import App from './App';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <I18nProvider>
      <AnalyticsProvider service={googleAnalyticsService}>
        <SubscriptionServiceProvider service={subscriptionService}>
          <Suspense fallback="loading...">
            <App />
          </Suspense>
        </SubscriptionServiceProvider>
      </AnalyticsProvider>
    </I18nProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
