import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestId } from '../../types';

export class InputDriver {
  constructor(private readonly testId: TestId) {}

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

  type(text: string) {
    const button = this.getElement();
    return userEvent.type(button, text);
  }

  private getElement() {
    return screen.getByTestId(this.testId) as HTMLInputElement;
  }
}
