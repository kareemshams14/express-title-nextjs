// Test file for loan-calculator.ts
import { describe, it, expect } from 'vitest';
import { calculateAPR, calculateLoan } from '../loan-calculator';

describe('calculateAPR', () => {
  it('should return 30% for loan amount $1000', () => {
    expect(calculateAPR(1000)).toBe(30);
  });

  it('should return 30% for loan amount $2000', () => {
    expect(calculateAPR(2000)).toBe(30);
  });

  it('should return 24% for loan amount $2000.01', () => {
    expect(calculateAPR(2000.01)).toBe(24);
  });

  it('should return 24% for loan amount $2500', () => {
    expect(calculateAPR(2500)).toBe(24);
  });

  it('should return 24% for loan amount $3000', () => {
    expect(calculateAPR(3000)).toBe(24);
  });

  it('should return 24% for loan amount $3000.01', () => {
    expect(calculateAPR(3000.01)).toBe(24);
  });

  it('should return 24% for loan amount $5000', () => {
    expect(calculateAPR(5000)).toBe(24);
  });

  it('should return 30% for loan amount $0', () => {
    expect(calculateAPR(0)).toBe(30);
  });
});

describe('calculateLoan', () => {
  it('should correctly calculate loan details for $1000, 30 days', () => {
    const loanAmount = 1000;
    const loanTermDays = 30;
    const result = calculateLoan({ loanAmount, loanTermDays });

    expect(result.apr).toBe(30);
    const expectedDailyRate = 0.30 / 365;
    const expectedTotalInterest = loanAmount * expectedDailyRate * loanTermDays;
    const expectedTotalRepayment = loanAmount + expectedTotalInterest;

    expect(result.totalInterest).toBeCloseTo(expectedTotalInterest);
    expect(result.totalRepayment).toBeCloseTo(expectedTotalRepayment);
  });

  it('should correctly calculate loan details for $2500, 60 days', () => {
    const loanAmount = 2500;
    const loanTermDays = 60;
    const result = calculateLoan({ loanAmount, loanTermDays });

    expect(result.apr).toBe(24);
    const expectedDailyRate = 0.24 / 365;
    const expectedTotalInterest = loanAmount * expectedDailyRate * loanTermDays;
    const expectedTotalRepayment = loanAmount + expectedTotalInterest;

    expect(result.totalInterest).toBeCloseTo(expectedTotalInterest);
    expect(result.totalRepayment).toBeCloseTo(expectedTotalRepayment);
  });
});
