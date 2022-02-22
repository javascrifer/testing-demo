import React, { useState } from 'react';

import { useAnalytics, useLocalization } from './hooks';
import { Button, SubscriptionForm } from './components';

function App() {
  const { t } = useLocalization();
  const { report } = useAnalytics();
  const [latestSubscriber, setLatestSubscriber] = useState<string>('');

  const handleSubscriptionFormSubmit = async (email: string) => {
    // eslint-disable-next-line no-warning-comments
    // TODO: Handle http call
    setLatestSubscriber(email);
    await report({ eventName: 'subscription-created' });
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
