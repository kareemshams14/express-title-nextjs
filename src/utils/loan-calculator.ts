// Loan calculator utility functions
interface LoanCalculationParams {
  loanAmount: number;
  loanTermDays: number;
}

interface LoanCalculationResult {
  apr: number;
  totalInterest: number;
  totalRepayment: number;
}

/**
 * Calculate APR based on loan amount according to legal rules
 * @param loanAmount Loan amount in USD
 * @returns APR percentage
 */
export function calculateAPR(loanAmount: number): number {
  if (loanAmount <= 2000) {
    return 30; // 30% APR for loans ≤ $2,000
  } else if (loanAmount <= 3000) {
    return 24; // 24% APR for loans $2,001-$3,000
  } else {
    return 24; // 24% APR for loans $3,001+ (never drop below 24%)
  }
}

/**
 * Calculate loan details based on amount and term
 * @param params Loan calculation parameters
 * @returns Loan calculation result with APR, interest, and total repayment
 */
export function calculateLoan(params: LoanCalculationParams): LoanCalculationResult {
  const { loanAmount, loanTermDays } = params;
  
  // Calculate APR based on loan amount
  const apr = calculateAPR(loanAmount);
  
  // Convert APR to daily rate
  const dailyRate = apr / 100 / 365;
  
  // Calculate interest using simple interest formula: P * r * t
  const totalInterest = loanAmount * dailyRate * loanTermDays;
  
  // Calculate total repayment
  const totalRepayment = loanAmount + totalInterest;
  
  return {
    apr,
    totalInterest,
    totalRepayment
  };
}
