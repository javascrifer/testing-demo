import React, { FC } from 'react';

import { SubscriptionServiceProvider } from '../../providers/subscription-service';
import { SubscriptionService } from '../../types';

const createSubscription = jest.fn();

export const subscriptionMockService: SubscriptionService = {
  createSubscription,
};

export const subscriptionServiceBeforeAndAfter = () => {
  return beforeEach(() => {
    createSubscription.mockReset();
  });
};

export const SubscriptionServiceMockProvider: FC = ({ children }) => (
  <SubscriptionServiceProvider service={subscriptionMockService}>
    {children}
  </SubscriptionServiceProvider>
);
