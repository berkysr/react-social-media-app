import { t } from 'i18next';
import { GenerateUser, GenerateUserAPIResponse, generateRandomUsers, setAlertMessage } from '../../shared/reducers/APIRequestReducer';
import { useAppDispatch } from '../../store';

export const generateUsers = (options: GenerateUser) => {
  const dispatch = useAppDispatch();

  dispatch(generateRandomUsers({ filterOptions: options }))
    .then((response) => {
      const payload = response.payload as GenerateUserAPIResponse;

      return payload;
    })
    .catch((error: { error: string }) => {
      const errorResponse = {
        message: error.error || t('error:error.api.generic'),
        icon: 'danger',
        canBeClosed: true,
      };

      dispatch(setAlertMessage(errorResponse));
    });
};

export const formatTextValue = (textValue: string) => textValue.toLowerCase().replaceAll(' ', '');
