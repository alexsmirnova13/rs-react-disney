import { isValidFirstLetter, validateDate } from './validation';

describe('isValidFirstLetter', () => {
  it('returns true if the first letter is uppercase', () => {
    const result = isValidFirstLetter('Hello');
    expect(result).toBe(true);
  });

  it('returns false if the first letter is not uppercase', () => {
    const result = isValidFirstLetter('hello');
    expect(result).toBe('First letter must be uppercase');
  });
});

describe('validateDate', () => {
  it('returns true if the date is today or earlier', () => {
    const today = new Date().toISOString().split('T')[0];
    const result = validateDate(today);
    expect(result).toBe(true);
  });

  it('returns false if the date is later than today', () => {
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const result = validateDate(tomorrow);
    expect(result).toBe('Select a date no later than today');
  });
});
