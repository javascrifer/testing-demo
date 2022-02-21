import { useTranslation } from 'react-i18next';

export const useLocalization = () => {
  const context = useTranslation();

  if (!context?.ready) {
    throw new Error('Localization context is missing');
  }

  return context;
};
