## Mocking vs Providing Test Kit

There is a good practice not to depend on concrete implementation. In other words, depend on abstraction not on implementation. In React applications this can be achieved using `Context`.

Lets take an analytics service. We need to start with some preparation steps:

1. Define an interface of [AnalyticsService](src/types/analytics.ts).
1. Create [Context + Provider](src/providers/analytics/analytics-provider.tsx) which will forward `AnalyticsService` to consumers.
1. Create [useAnalytics](src/hooks/analytics.ts) hook which allows to take `AnalyticsService` from the context.
1. Use `useAnalytics` hook in the [component](src/App.tsx).


To make it work for production/testing environments we simply need to create concrete implementations which matches interface of `AnalyticsService` and wrap our component with `Provider`.

Production environment:
1. [Google analytics service](src/services/google-analytics.ts).
1. [Wrapping App with provider](src/index.tsx) and pass Google analytics as a service implementation.

Testing environment:
1. Analytics test kit and Provider - [here](src/testing/providers/analytics-provider.tsx).
1. Wrapping component you want to test with [AnalyticsTestKitProvider](src/App.context.tsx).
