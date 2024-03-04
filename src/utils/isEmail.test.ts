import { isEmail } from './isEmail';

describe('isEmail', () => {
  it('should return true if email has @ and domain', () => {
    expect(isEmail('leonardo@gmail.com')).toBe(true);
  });

  it('should return false if email has no @', () => {
    expect(isEmail('leonardogmail.com')).toBe(false);
  });

  it('should return false if email has no domain', () => {
    expect(isEmail('leonardo@gmail')).toBe(false);
  });

  it('should return false if email has no domain and @', () => {
    expect(isEmail('leonardogmail')).toBe(false);
  });
});
