import { SubscriptionFormDriver } from '../../testing/drivers';

import {
  renderSubscriptionForm,
  OptionsBuilder,
  getPausableOnSubmit,
} from './subscription-form.context';

describe('<SubscriptionForm/>', () => {
  const formDriver = new SubscriptionFormDriver();
  const { inputDriver, submitButtonDriver } = formDriver;

  test('email input is type of email', () => {
    const renderOptions = new OptionsBuilder().build();
    renderSubscriptionForm(renderOptions);
    expect(inputDriver.getType()).toBe('email');
  });

  test('email input element has accessible name', () => {
    const renderOptions = new OptionsBuilder().build();
    renderSubscriptionForm(renderOptions);

    const inputElement = inputDriver.getElement();
    const expectedAccessibleName = 'subscription-form.email.title';
    expect(inputElement).toHaveAccessibleName(expectedAccessibleName);
  });

  test('email input has placeholder', () => {
    const renderOptions = new OptionsBuilder().build();
    renderSubscriptionForm(renderOptions);

    const expectedPlaceholder = 'subscription-form.email.placeholder';
    const receivedPlaceholder = inputDriver.getPlaceholder();
    expect(receivedPlaceholder).toBe(expectedPlaceholder);
  });

  test('email field is marked as required', () => {
    const renderOptions = new OptionsBuilder().build();
    renderSubscriptionForm(renderOptions);
    expect(inputDriver.isRequired()).toBe(true);
  });

  test('sets value for email when user is typing', () => {
    const renderOptions = new OptionsBuilder().build();

    renderSubscriptionForm(renderOptions);
    inputDriver.type('example@email.com');

    expect(inputDriver.getValue()).toBe('example@email.com');
  });

  test('submit subscription button is type of submit', () => {
    const renderOptions = new OptionsBuilder().build();
    renderSubscriptionForm(renderOptions);
    expect(submitButtonDriver.getType()).toBe('submit');
  });

  test('submit subscription button has accessible name', () => {
    const renderOptions = new OptionsBuilder().build();
    renderSubscriptionForm(renderOptions);

    const buttonElement = submitButtonDriver.getElement();
    const expectedAccessibleName = 'subscription-form.cta.text';
    expect(buttonElement).toHaveAccessibleName(expectedAccessibleName);
  });

  test('calls onSubmit handler when form is submitted', async () => {
    const renderOptions = new OptionsBuilder().build();

    renderSubscriptionForm(renderOptions);
    inputDriver.type('example@email.com');
    await formDriver.submit();

    expect(renderOptions.onSubmit).toHaveBeenCalled();
    expect(renderOptions.onSubmit).toHaveBeenCalledWith('example@email.com');
  });

  test('disables submit button while form is submitting', async () => {
    const { onSubmit, resolveSubmit } = getPausableOnSubmit();
    const renderOptions = new OptionsBuilder().withOnSubmit(onSubmit).build();

    renderSubscriptionForm(renderOptions);
    inputDriver.type('example@email.com');
    await formDriver.submit();

    const isSubmitButtonDisabled = submitButtonDriver.isDisabled();
    resolveSubmit();
    expect(isSubmitButtonDisabled).toBe(true);
  });
});
