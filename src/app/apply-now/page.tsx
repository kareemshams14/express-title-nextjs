'use client';

import React, { useState } from 'react';
import VinDecoder from '../../components/VinDecoder';
import GHLFormIntegration from '../../components/GHLFormIntegration';
import LoanCalculator from '../../components/LoanCalculator';

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  trim: string;
  mileage: number;
  value: number;
  loanAmount: number;
  imageUrl: string | null;
  vin: string;
}

export default function ApplyNow() {
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo | null>(null);

  const handleVehicleInfoChange = (info: VehicleInfo | null) => {
    setVehicleInfo(info);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Apply for a Title Loan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <VinDecoder onVehicleInfoChange={handleVehicleInfoChange} />

          {vehicleInfo && (
            <div className="mt-8">
              <LoanCalculator
                vehicleValue={vehicleInfo.value}
                initialLoanAmount={vehicleInfo.loanAmount}
              />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Complete Your Application</h2>
          <GHLFormIntegration vehicleInfo={vehicleInfo} />
        </div>
      </div>
    </main>
  );
}
