export const isValidEmpty = (str: string) => {
  return str.trim().length > 0;
};

export const isValidFile = (file: File | undefined) => {
  return !!file;
};

const isValidLength = (str: string) => {
  return 2 < str.trim().length && 50 > str.trim().length;
};

const isValidFirstLetter = (str: string) => {
  return str.trim().split('')[0] === str.trim().split('')[0].toUpperCase();
};

const isDayBeforeToday = (str: string) => {
  return new Date() > new Date(str);
};

export const isErrorName = (str: string) => {
  return !isValidEmpty(str) || !isValidLength(str) || !isValidFirstLetter(str);
};

export const isErrorDate = (str: string) => {
  return !isValidEmpty(str) || !isDayBeforeToday(str);
};
