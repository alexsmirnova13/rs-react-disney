import { isErrorDate, isErrorName, isValidEmpty, isValidFile } from './validation';

describe('isValidEmpty', () => {
  it('should return true if the string is not empty after trimming', () => {
    const result = isValidEmpty('   hello   ');
    expect(result).toBe(true);
  });

  it('should return false if the string is empty after trimming', () => {
    const result = isValidEmpty('   ');
    expect(result).toBe(false);
  });
});

describe('isValidFile', () => {
  it('should return true if the file is defined', () => {
    const file = new File([''], 'filename.txt');
    const result = isValidFile(file);
    expect(result).toBe(true);
  });

  it('should return false if the file is undefined', () => {
    const result = isValidFile(undefined);
    expect(result).toBe(false);
  });
});

describe('isErrorName', () => {
  it('should return false if the name is valid', () => {
    const result = isErrorName('John Doe');
    expect(result).toBe(false);
  });

  it('should return true if the name is empty', () => {
    const result = isErrorName('');
    expect(result).toBe(true);
  });

  it('should return true if the name is too short', () => {
    const result = isErrorName('A');
    expect(result).toBe(true);
  });
});

describe('isErrorDate', () => {
  it('should return false if the date is before today', () => {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const result = isErrorDate(yesterday);
    expect(result).toBe(false);
  });

  it('should return true if the date is after today', () => {
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const result = isErrorDate(tomorrow);
    expect(result).toBe(true);
  });

  it('should return true if the date is empty', () => {
    const result = isErrorDate('');
    expect(result).toBe(true);
  });
});
