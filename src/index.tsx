import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { I18nProvider } from './providers/i18n';
import App from './App';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <I18nProvider>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </I18nProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
