import React from 'react';

import { useLocalization } from './hooks';
import { Button } from './components';

function App() {
  const { t } = useLocalization();
  return <Button>{t('landing-page.cta')}</Button>;
}

export default App;
