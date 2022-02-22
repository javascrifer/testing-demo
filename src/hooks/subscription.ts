import { useContext } from 'react';

import { SubscriptionServicePropsContext } from '../providers/subscription-service';

export const useSubscriptionService = () => {
  const context = useContext(SubscriptionServicePropsContext);

  if (!context) {
    throw new Error('Subscription service context is missing');
  }

  return context;
};
