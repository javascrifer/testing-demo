import React from 'react';
import { render } from '@testing-library/react';

import { TestId } from '../../types';
import { I18nTestProvider } from '../../testing/i18n-provider';

import { SubscriptionForm, SubscriptionFormProps } from './subscription-form';

type RenderOptions = SubscriptionFormProps;

export const getPausableOnSubmit = () => {
  let resolveSubmit: (value?: unknown) => unknown = jest.fn();
  const onSubmit = jest.fn(
    () => new Promise((resolve) => (resolveSubmit = resolve))
  );

  return { resolveSubmit, onSubmit };
};

export class OptionsBuilder {
  private testId = TestId.SubscriptionForm;
  private onSubmit = jest.fn();

  withOnSubmit(onSubmit: jest.Mock) {
    this.onSubmit = onSubmit;
    return this;
  }

  build(): RenderOptions {
    return {
      testId: this.testId,
      onSubmit: this.onSubmit,
    };
  }
}

export const renderSubscriptionForm = (options: RenderOptions) => {
  return render(
    <I18nTestProvider>
      <SubscriptionForm {...options} />
    </I18nTestProvider>
  );
};
