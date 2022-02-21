import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestId } from '../../types';

export class ButtonDriver {
  constructor(private readonly testId: TestId) {}

  getText() {
    const { textContent } = this.getElement();
    return textContent;
  }

  getType() {
    const { type } = this.getElement();
    return type;
  }

  isDisabled() {
    const { disabled } = this.getElement();
    return disabled;
  }

  click() {
    const button = this.getElement();
    return userEvent.click(button);
  }

  private getElement() {
    return screen.getByTestId(this.testId) as HTMLButtonElement;
  }
}
