"use client";

import React, { useState, useEffect } from 'react';
import { calculateLoan } from '../utils/loan-calculator';

interface LoanCalculatorProps {
  vehicleValue: number;
  initialLoanAmount?: number;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ 
  vehicleValue, 
  initialLoanAmount 
}) => {
  // Calculate max loan amount (30% of vehicle value)
  const maxLoanAmount = Math.round(vehicleValue * 0.3);
  
  // Set initial loan amount to either provided value or max loan amount
  const [loanAmount, setLoanAmount] = useState(
    initialLoanAmount ? Math.min(initialLoanAmount, maxLoanAmount) : maxLoanAmount
  );
  
  // Set initial loan term to 30 days
  const [loanTermDays, setLoanTermDays] = useState(30);
  
  // State for loan calculation results
  const [calculationResult, setCalculationResult] = useState({
    apr: 0,
    totalInterest: 0,
    totalRepayment: 0
  });

  // Update loan calculation when inputs change
  useEffect(() => {
    const result = calculateLoan({
      loanAmount,
      loanTermDays
    });
    
    setCalculationResult(result);
  }, [loanAmount, loanTermDays]);

  // Handle loan amount slider change
  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLoanAmount(value);
  };

  // Handle loan amount direct input
  const handleLoanAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numValue = value ? parseInt(value) : 0;
    
    // Ensure loan amount doesn't exceed max
    if (numValue <= maxLoanAmount) {
      setLoanAmount(numValue);
    }
  };

  // Handle loan term selection
  const handleLoanTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoanTermDays(parseInt(e.target.value));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6"> {/* Card background remains white, page is cvBgLight */}
      <h2 className="text-2xl font-bold mb-4 text-cvBlue">Loan Calculator</h2> {/* Heading color from globals.css, but can be specific if needed */}
      
      <div className="mb-6">
        <label htmlFor="loan-amount" className="block text-cvTextDark font-medium mb-2">
          Desired Loan Amount: ${loanAmount.toLocaleString()}
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            id="loan-amount"
            min="500"
            max={maxLoanAmount}
            step="100"
            value={loanAmount}
            onChange={handleLoanAmountChange}
            className="w-full h-2 bg-cvBgMedium rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cvBlue" // Added focus style
            // Note: Styling range input thumb requires specific CSS per browser, often not covered by Tailwind directly.
          />
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-cvDarkBlue">$</span>
            <input
              type="text"
              value={loanAmount}
              onChange={handleLoanAmountInput}
              className="pl-7 w-24 py-2 border border-cvBgMedium rounded-md focus:ring-cvBlue focus:border-cvBlue text-cvTextDark"
            />
          </div>
        </div>
        <p className="text-sm text-cvDarkBlue/80 mt-1"> {/* Secondary text with opacity */}
          Maximum loan amount: ${maxLoanAmount.toLocaleString()} (30% of vehicle value)
        </p>
      </div>
      
      <div className="mb-6">
        <label htmlFor="loan-term" className="block text-cvTextDark font-medium mb-2">
          Loan Term
        </label>
        <select
          id="loan-term"
          value={loanTermDays}
          onChange={handleLoanTermChange}
          className="w-full p-2 border border-cvBgMedium rounded-md focus:ring-cvBlue focus:border-cvBlue text-cvTextDark bg-white"
        >
          <option value="30">30 Days</option>
          <option value="60">60 Days</option>
          <option value="90">90 Days</option>
          <option value="120">120 Days</option>
        </select>
      </div>
      
      <div className="bg-cvBgLight p-4 rounded-lg border-l-4 border-cvBlue">
        <h3 className="text-lg font-bold mb-3 text-cvDarkBlue">Loan Summary</h3> {/* Heading color from globals.css */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-cvDarkBlue/80 text-sm">Annual Percentage Rate</p>
            <p className="text-2xl font-bold text-cvBlue">{calculationResult.apr}%</p>
            <p className="text-xs text-cvDarkBlue/60">Fixed APR</p>
          </div>
          
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-cvDarkBlue/80 text-sm">Total Interest</p>
            <p className="text-2xl font-bold text-cvBlue">
              ${Math.round(calculationResult.totalInterest).toLocaleString()}
            </p>
            <p className="text-xs text-cvDarkBlue/60">Simple interest</p>
          </div>
          
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-cvDarkBlue/80 text-sm">Total Repayment</p>
            <p className="text-2xl font-bold text-cvAccent"> {/* Using cvAccent for total repayment */}
              ${Math.round(calculationResult.totalRepayment).toLocaleString()}
            </p>
            <p className="text-xs text-cvDarkBlue/60">Principal + Interest</p>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-cvDarkBlue/80">
          <p>
            <strong>Note:</strong> This is a simple interest loan. APR is determined by loan amount:
          </p>
          <ul className="list-disc pl-5 mt-1">
            <li>Loans ≤ $2,000: 30% APR</li>
            <li>Loans $2,001-$3,000: 24% APR</li>
            <li>Loans $3,001+: 24% APR</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
