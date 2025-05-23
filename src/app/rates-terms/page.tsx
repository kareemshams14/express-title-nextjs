import React from 'react';
import LoanCalculator from '@/components/LoanCalculator'; // Added import

export default function RatesTermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* text-cvBlue class removed, h1 will inherit color from globals.css base style */}
      <h1 className="text-3xl font-bold mb-4">Rates & Terms</h1>
      {/* text-cvTextDark class removed, p will inherit color from globals.css base style */}
      <p className="mb-8"> 
        [Content for Rates & Terms will be added here. User to provide text detailing interest rates, loan terms, fees, and any representative examples.]
      </p>

      {/* Loan Calculator Section */}
      {/* Updated margins, padding, and background color */}
      <section className="my-12 md:my-16 py-12 md:py-16 bg-bg-subtle rounded-lg shadow"> 
        <div className="container-custom"> {/* Use container-custom if defined, else px-4 or similar */}
          {/* text-cvDarkBlue class removed, h2 will inherit color from globals.css base style */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            Estimate Your Potential Loan
          </h2>
          <div className="max-w-2xl mx-auto">
            <LoanCalculator
              vehicleValue={10000} // Default estimated vehicle value
              showVehicleValueInput={true} // Allow user to edit this value
            />
          </div>
        </div>
      </section>

      {/* Updated top margin */}
      <div className="mt-12 md:mt-16 space-y-4"> 
        {/* text-cvDarkBlue class removed, h2 will inherit color from globals.css base style */}
        <h2 className="text-xl font-semibold">General Information:</h2>
        <p>Placeholder text about rate determination...</p>
        {/* text-cvDarkBlue class removed, h2 will inherit color from globals.css base style */}
        <h2 className="text-xl font-semibold mt-4">Example Loan Scenario:</h2>
        <p>Placeholder text for a representative example...</p>
        {/* Add more sections as required by regulations or for clarity */}
      </div>
    </div>
  );
}
