import calculate from './logic/calculate';

describe('calculate', () => {
  it('should clear the calculator when "AC" button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should append numbers to "next" when a number button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({ total: '10', next: '52', operation: '+' });
  });

  it('should handle the decimal point correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });

    const result2 = calculate({ total: null, next: '5', operation: '+' }, '.');
    expect(result2).toEqual({ total: null, next: '5.', operation: '+' });

    const result3 = calculate(
      { total: '10', next: '5.5', operation: '+' },
      '.',
    );
    expect(result3).toEqual({ total: '10', next: '5.5', operation: '+' });
  });

  it('should perform the calculation when "=" is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('should toggle the sign when "+/-" is pressed', () => {
    const result = calculate(
      { total: null, next: '5', operation: null },
      '+/-',
    );
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });
});
