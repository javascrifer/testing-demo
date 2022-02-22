import { SubscriptionService } from '../types';

export const subscriptionService: SubscriptionService = {
  createSubscription: () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  },
};
