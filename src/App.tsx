import React from 'react';

import { useLocalization } from './hooks';
import { Button, SubscriptionForm } from './components';

function App() {
  const { t } = useLocalization();

  return (
    <>
      <SubscriptionForm onSubmit={() => {}} />
      <Button>{t('landing-page.cta')}</Button>
    </>
  );
}

export default App;
