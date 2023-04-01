export const isValidEmpty = (str: string) => {
  return str.trim().length > 0;
};

export const isValidFile = (file: File | undefined) => {
  return !!file;
};

const isValidLength = (str: string) => {
  return 2 < str.trim().length && 50 > str.trim().length;
};

export const isValidFirstLetter = (str: string) => {
  return (
    str.trim().split('')[0] === str.trim().split('')[0].toUpperCase() ||
    'First letter must be uppercase'
  );
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

export const validateDate = (value: string) => {
  const today = new Date().toISOString().split('T')[0];
  return value <= today || 'Выберите дату не позднее сегодняшней';
};
