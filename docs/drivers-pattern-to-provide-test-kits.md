## Drivers pattern to provide reusable test kits

### What drivers are?

Driver class can be described as a set of reusable functions for the component. Lets take (button)[src/components/button/button.tsx] as an example.

First of all, we need to describe what we may need to know about the button and the what we may need to do with the button. Example:

1. Get button element to run assertions like `expect(element).toHaveAccessibleName(expectedName)`.
1. Get button type - submit, reset, button.
1. Get the text content of the button.
1. Check if button is disabled.
1. Click the button.

Code for these requirements would look something like this:

```typescript
export class ButtonDriver {
  constructor(private readonly testId: TestId) {}

  getElement() {
    return screen.getByTestId(this.testId) as HTMLButtonElement;
  }

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
}
```

P.S test id is used to select specific element you want to target. For example, if component has 2 buttons, developer will need to assign unique test ids for them. Also, you can switch to querying elements using other `screen.getBy*` method just make sure that this selector is unique.

### How to use drivers?

Just create new instance of the driver and use methods it exposes in the test.

```tsx
describe("<Button/>", () => {
  const driver = new ButtonDriver(TestId.Button);

  test("calls onClick handler when button is clicked", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>);
    driver.click();

    expect(onClick).toHaveBeenCalled();
  });
});
```

### Good and bad parts

Good parts:

1. Querying and interaction logic are decoupled from the test.
1. Driver logic can be reused in parent components.
1. Drivers can be extended by child classes.
1. You can reuse interface of the driver across the E2E tests.

Bad parts:

1. More code for simple components.
1. ...
