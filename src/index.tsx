import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { I18nProvider } from './providers/i18n';
import { AnalyticsProvider } from './providers/analytics';
import { googleAnalyticsService } from './services';
import App from './App';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <I18nProvider>
      <AnalyticsProvider service={googleAnalyticsService}>
        <Suspense fallback="loading...">
          <App />
        </Suspense>
      </AnalyticsProvider>
    </I18nProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
