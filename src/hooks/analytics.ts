import { useContext } from 'react';

import { AnalyticsContext } from '../providers/analytics';

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);

  if (!context) {
    throw new Error('Analytics context is missing');
  }

  return context;
};
