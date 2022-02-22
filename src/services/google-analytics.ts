import { AnalyticsService } from '../types';

declare global {
  interface Window {
    dataLayer: { [key: string]: any }[];
  }
}

export const googleAnalyticsService: AnalyticsService = {
  report: (event) => {
    if (window.dataLayer) {
      window.dataLayer.push(event);
      return;
    }

    window.dataLayer = [event];
  },
};
