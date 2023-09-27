import operate from './logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    expect(operate('5', '3', '+')).toBe('8');
  });

  it('should subtract two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('should multiply two numbers', () => {
    expect(operate('5', '3', 'x')).toBe('15');
  });

  it('should divide two numbers', () => {
    expect(operate('6', '3', '/')).toBe('2');
  });

  it('should handle division by zero', () => {
    expect(operate('6', '0', '/')).toBe("Can't divide by 0.");
  });

  it('should find the modulo of two numbers', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('should handle modulo with divisor zero', () => {
    expect(operate('7', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0."
    );
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('5', '3', '#')).toThrow("Unknown operation '#'");
  });
});
