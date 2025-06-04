import { calculateAPR, calculateLoan } from '../src/utils/loan-calculator';

describe('calculateAPR', () => {
  it('returns 30% for loans up to $2,000', () => {
    expect(calculateAPR(1500)).toBe(30);
  });

  it('returns 24% for loans between $2,001 and $3,000', () => {
    expect(calculateAPR(2500)).toBe(24);
  });

  it('returns 24% for loans above $3,000', () => {
    expect(calculateAPR(4000)).toBe(24);
  });
});

describe('calculateLoan', () => {
  it('calculates interest and repayment for typical input', () => {
    const result = calculateLoan({ loanAmount: 1000, loanTermDays: 30 });
    expect(result.apr).toBe(30);
    expect(result.totalInterest).toBeCloseTo(24.6575, 4);
    expect(result.totalRepayment).toBeCloseTo(1024.6575, 4);
  });

  it('calculates interest and repayment for larger loan', () => {
    const result = calculateLoan({ loanAmount: 2500, loanTermDays: 60 });
    expect(result.apr).toBe(24);
    expect(result.totalInterest).toBeCloseTo(98.6301, 4);
    expect(result.totalRepayment).toBeCloseTo(2598.6301, 4);
  });
});
