import React, { createContext, FC } from 'react';

import { SubscriptionService } from '../../types';

interface SubscriptionServiceProviderProps {
  service: SubscriptionService;
}

export const SubscriptionServicePropsContext =
  createContext<SubscriptionService | null>(null);

export const SubscriptionServiceProvider: FC<
  SubscriptionServiceProviderProps
> = ({ service, children }) => {
  return (
    <SubscriptionServicePropsContext.Provider value={service}>
      {children}
    </SubscriptionServicePropsContext.Provider>
  );
};
