export interface AnalyticsService {
  report: <T>(event: T) => void | Promise<void>;
}
