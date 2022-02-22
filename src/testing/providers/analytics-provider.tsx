import React, { FC } from 'react';

import { AnalyticsProvider } from '../../providers/analytics';
import { AnalyticsService } from '../../types';

const report = jest.fn();

export const analyticsMockService: AnalyticsService = { report };

export const analyticsBeforeAndAfter = () => {
  return beforeEach(() => {
    report.mockReset();
  });
};

export const AnalyticsMockProvider: FC = ({ children }) => (
  <AnalyticsProvider service={analyticsMockService}>
    {children}
  </AnalyticsProvider>
);
