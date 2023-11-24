import { t } from 'i18next';

export const generateErrorMessage = (error: string) => {
  return {
    message: error || t('error:error.validation.api.genericError'),
    icon: 'danger',
    canBeClosed: true,
  };
};

export const formatTextValue = (textValue: string) => textValue.toLowerCase().replaceAll(' ', '');
