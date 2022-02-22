import React, { createContext, FC } from 'react';

import { AnalyticsService } from '../../types';

interface AnalyticsProviderProps {
  service: AnalyticsService;
}

export const AnalyticsContext = createContext<AnalyticsService | null>(null);

export const AnalyticsProvider: FC<AnalyticsProviderProps> = ({
  service,
  children,
}) => {
  return (
    <AnalyticsContext.Provider value={service}>
      {children}
    </AnalyticsContext.Provider>
  );
};
