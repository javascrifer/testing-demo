import React, { useState } from 'react';

import { useAnalytics, useLocalization, useSubscriptionService } from './hooks';
import { SubscriptionForm } from './components';

function App() {
  const { t } = useLocalization();
  const { report } = useAnalytics();
  const { createSubscription } = useSubscriptionService();
  const [latestSubscriber, setLatestSubscriber] = useState<string>('');

  const handleSubscriptionFormSubmit = async (email: string) => {
    await createSubscription(email);
    setLatestSubscriber(email);
    return report({ eventName: 'subscription-created' });
  };

  return (
    <>
      <SubscriptionForm onSubmit={handleSubscriptionFormSubmit} />
      {latestSubscriber && (
        <p>{t('landing-page.greeting', { name: latestSubscriber })}</p>
      )}
    </>
  );
}

export default App;
