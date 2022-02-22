import { beforeAndAfter, renderApp, analyticsMockService } from './App.context';
import { AppDriver } from './App.driver';

describe('<App/>', () => {
  const { subscriptionFormDriver } = new AppDriver();

  beforeAndAfter();

  test('reports subscription created event to analytics service when subscription is created', async () => {
    renderApp();

    subscriptionFormDriver.inputDriver.type('example@email.com');
    await subscriptionFormDriver.submit();

    expect(analyticsMockService.report).toHaveBeenCalledWith({
      eventName: 'subscription-created',
    });
  });
});
