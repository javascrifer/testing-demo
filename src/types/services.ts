export interface SubscriptionService {
  createSubscription: (email: string) => Promise<void>;
}
