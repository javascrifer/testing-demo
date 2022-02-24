import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestId } from '../../types';

export class InputDriver {
  constructor(private readonly testId: TestId) {}

  getElement() {
    return screen.getByTestId(this.testId) as HTMLInputElement;
  }

  getPlaceholder() {
    const { placeholder } = this.getElement();
    return placeholder;
  }

  getValue() {
    const { value } = this.getElement();
    return value;
  }

  getType() {
    const { type } = this.getElement();
    return type;
  }

  isDisabled() {
    const { disabled } = this.getElement();
    return disabled;
  }

  isRequired() {
    const { required } = this.getElement();
    return required;
  }

  type(text: string) {
    const input = this.getElement();
    return userEvent.type(input, text);
  }
}
