import { TestId } from '../../types';

import { renderInput } from './input.context';
import { InputDriver } from './input.driver';

describe('<Input/>', () => {
  const driver = new InputDriver(TestId.Input);

  test('sets value for the input', () => {
    renderInput({ value: 'Hello world!', onChange: jest.fn() });
    expect(driver.getValue()).toBe('Hello world!');
  });

  test('forwards type attribute to the button element', () => {
    renderInput({ type: 'email' });
    expect(driver.getType()).toBe('email');
  });

  test('renders input with type text if no type is passed', () => {
    renderInput();
    expect(driver.getType()).toBe('text');
  });

  test('forwards disabled attribute to the button element', () => {
    renderInput({ disabled: true });
    expect(driver.isDisabled()).toBe(true);
  });

  test('calls onChange handler when user types into input', () => {
    const onChange = jest.fn();

    renderInput({ defaultValue: '', onChange });
    driver.type('Hello world!');

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'Hello world!' }),
      })
    );
  });
});
