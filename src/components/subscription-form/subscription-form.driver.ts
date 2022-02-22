import { act } from '@testing-library/react';

import { TestId } from '../../types';
import { InputDriver } from '../input/input.driver';
import { ButtonDriver } from '../button/button.driver';

const inputTestId = TestId.SubscriptionFormEmailInput;
const buttonTestId = TestId.SubscriptionFormSubmitButton;

export class SubscriptionFormDriver {
  readonly inputDriver = new InputDriver(inputTestId);
  readonly submitButtonDriver = new ButtonDriver(buttonTestId);

  async submit() {
    return act(async () => this.submitButtonDriver.click());
  }
}
