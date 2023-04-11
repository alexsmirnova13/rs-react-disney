import { getBase64, pass_gen } from './functions';

describe('pass_gen', () => {
  it('should generate a string of length 20', () => {
    const password = pass_gen();
    expect(password.length).toBe(20);
  });

  it('should only contain characters from the specified character set', () => {
    const password = pass_gen();
    const regex = /^[abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789]+$/;
    expect(regex.test(password)).toBe(true);
  });

  it('should generate a different password each time it is called', () => {
    const password1 = pass_gen();
    const password2 = pass_gen();
    expect(password1).not.toBe(password2);
  });
});

describe('getBase64', () => {
  it('should return a base64 string for a given file', async () => {
    const file = new File(['hello world'], 'test.txt', { type: 'text/plain' });
    const result = await getBase64(file);
    expect(result).toContain('data:text/plain;base64,aGVsbG8gd29ybGQ=');
  });
});
