import { formatTextValue, generateErrorMessage } from '../../../src/helpers/utils/commonFunctions';

describe('commonFunctions', () => {
  describe('generateErrorMessage', () => {
    it('should return an object with message, icon, and canBeClosed properties when given a string error', () => {
      const error = 'Some error message';
      const result = generateErrorMessage(error);

      expect(result).toEqual({
        message: error,
        icon: 'danger',
        canBeClosed: true,
      });
    });
  });
  describe('formatTextValue', () => {
    it('should return given text value in lowercase and without spaces', () => {
      const textValue = 'Some text value';
      const result = formatTextValue(textValue);

      expect(result).toEqual('sometextvalue');
    });
  });
});
