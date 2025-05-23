"use client";

import React, { useState, useEffect } from 'react';
import { calculateLoan } from '../utils/loan-calculator';

interface LoanCalculatorProps {
  vehicleValue: number;
  initialLoanAmount?: number;
  showVehicleValueInput?: boolean; // New prop
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ 
  vehicleValue, 
  initialLoanAmount,
  showVehicleValueInput = false // Default to false if not provided
}) => {
  const [editableVehicleValue, setEditableVehicleValue] = useState<number>(vehicleValue);

  // Determine the actual vehicle value to use for calculations
  const actualVehicleValue = showVehicleValueInput ? editableVehicleValue : vehicleValue;
  
  // Calculate max loan amount (30% of actual vehicle value)
  const maxLoanAmount = Math.max(500, Math.round(actualVehicleValue * 0.3)); // Ensure maxLoanAmount is at least 500

  // Initialize loanAmount state
  const [loanAmount, setLoanAmount] = useState(() => {
    const initialMax = Math.max(500, Math.round(actualVehicleValue * 0.3)); // Recalculate for initial state
    return Math.max(500, initialLoanAmount ? Math.min(initialLoanAmount, initialMax) : initialMax);
  });
  
  // Effect to update loanAmount if actualVehicleValue (and thus maxLoanAmount) or initialLoanAmount prop changes
  useEffect(() => {
    const newMax = Math.max(500, Math.round(actualVehicleValue * 0.3));
    let newAmount = loanAmount;

    if (initialLoanAmount) {
      newAmount = Math.max(500, Math.min(initialLoanAmount, newMax));
    } else {
      // If no initialLoanAmount, ensure current loanAmount is within new bounds [500, newMax]
      newAmount = Math.max(500, Math.min(loanAmount, newMax));
    }
    // Only set state if the calculated newAmount is different from the current loanAmount
    // to prevent infinite loops if a dependency is accidentally tied to loanAmount itself.
    if (newAmount !== loanAmount) {
      setLoanAmount(newAmount);
    }
  }, [actualVehicleValue, initialLoanAmount, loanAmount]); // Added loanAmount to dependencies to re-check if it was set outside bounds by other means.

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
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    let numValue = value ? parseInt(value) : 0;
    
    // Clamp the value between 500 and maxLoanAmount when setting
    // We allow typing any number, but the actual state update is clamped.
    // For a better UX, clamping might happen onBlur, but this is simpler for now.
    numValue = Math.max(500, Math.min(numValue, maxLoanAmount));
    setLoanAmount(numValue);
  };
  
  const handleLoanAmountBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let numValue = value ? parseInt(value) : 0;
    // Ensure value is at least 500 on blur
    if (numValue < 500 && value !== '') { // if value is not empty string
        numValue = 500;
    }
    // Clamp to maxLoanAmount
    numValue = Math.min(numValue, maxLoanAmount);
    setLoanAmount(numValue);
  };


  // Handle loan term selection
  const handleLoanTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoanTermDays(parseInt(e.target.value));
  };

  return (
    <div className="bg-light rounded-lg shadow-md p-6"> {/* Updated bg-white to bg-light */}
      <h2 className="text-2xl font-bold mb-4 text-secondary">Loan Calculator</h2> {/* Updated text-cvBlue to text-secondary */}

      {showVehicleValueInput && (
        <div className="mb-6">
          <label htmlFor="vehicle-value-input" className="block text-body font-medium mb-2"> {/* Updated text-cvTextDark to text-body */}
            Estimated Vehicle Value: ${editableVehicleValue.toLocaleString()}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">$</span> {/* Updated text-cvDarkBlue to text-primary */}
            <input
              type="text" // Using text for easier input and manual formatting/parsing
              id="vehicle-value-input"
              value={editableVehicleValue.toLocaleString()} // Display with commas
              onChange={(e) => {
                const rawValue = e.target.value.replace(/\D/g, '');
                const numValue = rawValue ? parseInt(rawValue) : 0;
                setEditableVehicleValue(numValue);
              }}
              className="pl-7 w-full py-2 border border-border-neutral rounded-md focus:ring-secondary focus:border-secondary text-body" // Updated colors
            />
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <label htmlFor="loan-amount" className="block text-body font-medium mb-2"> {/* Updated text-cvTextDark to text-body */}
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
            className="w-full h-2 bg-border-neutral rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary" // Updated colors
            // Note: Styling range input thumb requires specific CSS per browser, often not covered by Tailwind directly.
          />
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">$</span> {/* Updated text-cvDarkBlue to text-primary */}
            <input
              type="text" // Keep as text to allow $ sign and commas if desired by user, parsing handles it
              value={loanAmount.toLocaleString()} // Display with commas
              onChange={handleLoanAmountInput} // Handles parsing and clamping
              onBlur={handleLoanAmountBlur} // Handles clamping to 500 on blur
              className="pl-7 w-28 py-2 border border-border-neutral rounded-md focus:ring-secondary focus:border-secondary text-body" // Updated colors
            />
          </div>
        </div>
        <p className="text-sm text-primary opacity-80 mt-1"> {/* Updated text-cvDarkBlue/80 to text-primary opacity-80 */}
          Min: $500, Max: ${maxLoanAmount.toLocaleString()} (30% of vehicle value)
        </p>
      </div>
      
      <div className="mb-6">
        <label htmlFor="loan-term" className="block text-body font-medium mb-2"> {/* Updated text-cvTextDark to text-body */}
          Loan Term
        </label>
        <select
          id="loan-term"
          value={loanTermDays}
          onChange={handleLoanTermChange}
          className="w-full p-2 border border-border-neutral rounded-md focus:ring-secondary focus:border-secondary text-body bg-light" // Updated colors
        >
          <option value="30">30 Days</option>
          <option value="60">60 Days</option>
          <option value="90">90 Days</option>
          <option value="120">120 Days</option>
        </select>
      </div>
      
      <div className="bg-bg-subtle p-4 rounded-lg border-l-4 border-secondary"> {/* Updated colors */}
        <h3 className="text-lg font-bold mb-3 text-heading">Loan Summary</h3> {/* Updated text-cvDarkBlue to text-heading */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-light p-3 rounded-md shadow-sm"> {/* Updated bg-white to bg-light */}
            <p className="text-primary opacity-80 text-sm">Annual Percentage Rate</p> {/* Updated text-cvDarkBlue/80 to text-primary opacity-80 */}
            <p className="text-2xl font-bold text-secondary">{calculationResult.apr}%</p> {/* Updated text-cvBlue to text-secondary */}
            <p className="text-xs text-primary opacity-60">Fixed APR</p> {/* Updated text-cvDarkBlue/60 to text-primary opacity-60 */}
          </div>
          
          <div className="bg-light p-3 rounded-md shadow-sm"> {/* Updated bg-white to bg-light */}
            <p className="text-primary opacity-80 text-sm">Total Interest</p> {/* Updated text-cvDarkBlue/80 to text-primary opacity-80 */}
            <p className="text-2xl font-bold text-secondary"> {/* Updated text-cvBlue to text-secondary */}
              ${Math.round(calculationResult.totalInterest).toLocaleString()}
            </p>
            <p className="text-xs text-primary opacity-60">Simple interest</p> {/* Updated text-cvDarkBlue/60 to text-primary opacity-60 */}
          </div>
          
          <div className="bg-light p-3 rounded-md shadow-sm"> {/* Updated bg-white to bg-light */}
            <p className="text-primary opacity-80 text-sm">Total Repayment</p> {/* Updated text-cvDarkBlue/80 to text-primary opacity-80 */}
            <p className="text-2xl font-bold text-accent"> {/* Updated text-cvAccent to text-accent */}
              ${Math.round(calculationResult.totalRepayment).toLocaleString()}
            </p>
            <p className="text-xs text-primary opacity-60">Principal + Interest</p> {/* Updated text-cvDarkBlue/60 to text-primary opacity-60 */}
          </div>
        </div>
        
        <div className="mt-4 text-sm text-primary opacity-80"> {/* Updated text-cvDarkBlue/80 to text-primary opacity-80 */}
          <p>
            <strong>Note:</strong> This is a simple interest loan. APR is determined by loan amount:
          </p>
          <ul className="list-disc pl-5 mt-1">
            <li>Loans ≤ $2,000: 30% APR</li>
            <li>Loans $2,001-$3,000: 24% APR</li>
            <li>Loans $3,001+: 18% APR</li> {/* Updated APR */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
