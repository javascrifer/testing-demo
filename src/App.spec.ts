import {
  beforeAndAfter,
  renderApp,
  analyticsMockService,
  subscriptionMockService,
} from './App.context';
import { AppDriver } from './App.driver';

describe('<App/>', () => {
  const { subscriptionFormDriver } = new AppDriver();

  beforeAndAfter();

  test('creates subscription when subscription creation form is submitted', async () => {
    renderApp();

    subscriptionFormDriver.inputDriver.type('example@email.com');
    await subscriptionFormDriver.submit();

    expect(subscriptionMockService.createSubscription).toHaveBeenCalledWith(
      'example@email.com'
    );
  });

  test('reports subscription created event to analytics service when subscription is created', async () => {
    renderApp();

    subscriptionFormDriver.inputDriver.type('example@email.com');
    await subscriptionFormDriver.submit();

    expect(analyticsMockService.report).toHaveBeenCalledWith({
      eventName: 'subscription-created',
    });
  });
});
