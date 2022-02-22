import { TestId } from '../../types';
import { ButtonDriver } from '../../testing/drivers';

import { renderButton } from './button.context';

describe('<Button/>', () => {
  const driver = new ButtonDriver(TestId.Button);

  test('renders forwarded text inside the button', () => {
    renderButton({ children: 'Hello world!' });
    expect(driver.getText()).toBe('Hello world!');
  });

  test('forwards type attribute to the button element', () => {
    renderButton({ type: 'submit' });
    expect(driver.getType()).toBe('submit');
  });

  test('renders button with type button if no type is passed', () => {
    renderButton();
    expect(driver.getType()).toBe('button');
  });

  test('forwards disabled attribute to the button element', () => {
    renderButton({ disabled: true });
    expect(driver.isDisabled()).toBe(true);
  });

  test('calls onClick handler when button is clicked', () => {
    const onClick = jest.fn();

    renderButton({ onClick });
    driver.click();

    expect(onClick).toHaveBeenCalled();
  });
});
