import React from 'react';
import { render, screen } from '@testing-library/react';

import { I18nTestProvider } from './testing/i18n-provider';
import App from './App';

test('renders learn react link', () => {
  render(
    <I18nTestProvider>
      <App />
    </I18nTestProvider>
  );
  const linkElement = screen.getByText('landing-page.cta');
  expect(linkElement).toBeInTheDocument();
});
