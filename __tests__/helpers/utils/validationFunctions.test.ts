import {
  atLeastOneCapitalorSmallLetter,
  atLeastOneNumber,
  atLeastOneSpecialCharacter,
  repeatingCharacter,
} from '../../../src/helpers/utils/validationFunctions';
describe('validationFunctions', () => {
  describe('repeatingCharacter', () => {
    it('should return true when the input string has no repeating characters', () => {
      const result = repeatingCharacter('abcde');
      expect(result).toBe(true);
    });

    it('should return false when the input string has at least one repeating character', () => {
      const result = repeatingCharacter('hello');
      expect(result).toBe(false);
    });

    describe('atLeastOneCapitalorSmallLetter', () => {
      it('should return true when the input string contains at least one uppercase and one lowercase letter', () => {
        const result = atLeastOneCapitalorSmallLetter('Abc');
        expect(result).toBe(true);
      });

      it('should return false when the input string does not contains at least one uppercase and one lowercase letter', () => {
        const result = atLeastOneCapitalorSmallLetter('abc');
        expect(result).toBe(false);
      });
    });

    describe('atLeastOneNumber', () => {
      it('should return true when the input string contains at least one number', () => {
        const result = atLeastOneNumber('1ab');
        expect(result).toBe(true);
      });

      it('should return false when the input string does not contain at least one number', () => {
        const result = atLeastOneNumber('abc');
        expect(result).toBe(false);
      });
    });

    describe('atLeastOneSpecialCharacter', () => {
      it('should return true when the input string contains at least one special character', () => {
        const result = atLeastOneSpecialCharacter('ab!');
        expect(result).toBe(true);
      });

      it('should return false when the input string does not contain at least one special character', () => {
        const result = atLeastOneSpecialCharacter('abc');
        expect(result).toBe(false);
      });
    });
  });
});
