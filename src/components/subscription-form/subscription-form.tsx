import React, { FC, FormEventHandler, useState } from 'react';

import { TestId } from '../../types';
import { useLocalization } from '../../hooks';
import { Input } from '../input';
import { Button } from '../button';

export interface SubscriptionFormProps {
  testId?: TestId;
  onSubmit: (email: string) => Promise<void> | void;
}

export const SubscriptionForm: FC<SubscriptionFormProps> = ({
  testId,
  onSubmit,
}) => {
  const { t } = useLocalization();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await onSubmit(email);
    setIsSubmitting(false);
  };

  return (
    <form data-testid={testId} onSubmit={handleFormSubmit}>
      <Input
        testId={TestId.SubscriptionFormEmailInput}
        type="email"
        title={t('subscription-form.email.title')}
        placeholder={t('subscription-form.email.placeholder')}
        required
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <Button
        testId={TestId.SubscriptionFormSubmitButton}
        type="submit"
        disabled={isSubmitting}
      >
        {t('subscription-form.cta.text')}
      </Button>
    </form>
  );
};

SubscriptionForm.defaultProps = { testId: TestId.SubscriptionForm };
