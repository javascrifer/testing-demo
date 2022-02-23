## Context builders

Context builders are used to extract rendering and props building logic out of the test file. Most of the time it holds the following functions/objects:

1. Component rendering function - wraps up React component with required Providers.
2. Before and after functions to cleanup Jest mocks.
3. Props building objects.

### Rendering function

```tsx
export const renderApp = () => {
  return render(
    <I18nTestProvider>
      <AnalyticsMockProvider>
        <SubscriptionServiceMockProvider>
          <App />
        </SubscriptionServiceMockProvider>
      </AnalyticsMockProvider>
    </I18nTestProvider>
  );
};
```

### Before and after function

```typescript
// Reset analytics mocks in analytics-provider.tsx
export const analyticsBeforeAndAfter = () => {
  return beforeEach(() => {
    report.mockReset();
  });
};

// Reset service mocks in subscription-service-provider.tsx
export const subscriptionServiceBeforeAndAfter = () => {
  return beforeEach(() => {
    createSubscription.mockReset();
  });
};

// Re-export simplified version of the reset in App.context.tsx
export const beforeAndAfter = () => {
  analyticsBeforeAndAfter();
  subscriptionServiceBeforeAndAfter();
};
```

### Options builder

```typescript
// Props builder object which ships with default props
export class PropsBuilder {
  private testId = TestId.SubscriptionForm;
  private onSubmit = jest.fn();

  withOnSubmit(onSubmit: jest.Mock) {
    this.onSubmit = onSubmit;
    return this;
  }

  build(): ComponentProps {
    return {
      testId: this.testId,
      onSubmit: this.onSubmit,
    };
  }
}

// Usage in test suite
const props = new PropsBuilder().build();

const props = new OptionsBuilder()
    .withOnSubmit(customOnSubmitImplementation)
    .build();
```
