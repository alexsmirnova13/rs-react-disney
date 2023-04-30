export const isValidFirstLetter = (str: string) => {
  return (
    str.trim().split('')[0] === str.trim().split('')[0].toUpperCase() ||
    'First letter must be uppercase'
  );
};

export const validateDate = (value: string) => {
  const today = new Date().toISOString().split('T')[0];
  return value <= today || 'Select a date no later than today';
};
