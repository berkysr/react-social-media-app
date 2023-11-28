export const repeatingCharacter: (value: string) => boolean = (value) => {
  const arrayOfValue = value.split('');

  return !arrayOfValue.some((arrayValue, index) => {
    return arrayValue === arrayOfValue[index - 1] || arrayValue === arrayOfValue[index + 1];
  });
};

export const atLeastOneCapitalorSmallLetter: (value: string) => boolean = (value) => {
  const letterArray = value.split('').filter((character) => character.match(/^[A-Za-z]+$/));
  const isUpperCase = letterArray.some((letter) => letter === letter.toUpperCase());
  const isLowerCase = letterArray.some((letter) => letter === letter.toLowerCase());

  return isLowerCase && isUpperCase;
};

export const atLeastOneNumber: (value: string) => boolean = (value) => {
  const letterArray = value.split('');

  return letterArray.some((letter) => (Number(letter) ? true : false));
};

export const atLeastOneSpecialCharacter: (value: string) => boolean = (value) => {
  const letterArray = value.split('').filter((character) => !character.match(/\w+/));

  return letterArray.length > 0;
};
