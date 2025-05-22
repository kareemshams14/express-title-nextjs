"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { getVehicleImageAndPricing, calculateFallbackVehicleValue } from '../utils/marketcheck';

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  trim: string;
  mileage: number;
  value: number;
  loanAmount: number;
  imageUrl: string | null;
}

interface VinDecoderProps {
  onVehicleInfoChange?: (vehicleInfo: VehicleInfo | null) => void;
}

const VinDecoder: React.FC<VinDecoderProps> = ({ onVehicleInfoChange }) => {
  const [vin, setVin] = useState('');
  const [mileage, setMileage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo | null>(null);
  const [activeTab, setActiveTab] = useState('vin'); // 'vin' or 'details'

  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVin(e.target.value);
  };

  const handleMileageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, '');
    setMileage(value);
  };

  const decodeVin = async () => {
    if (!vin || vin.length !== 17) {
      setError('Please enter a valid 17-character VIN');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // First, decode the VIN using NHTSA API
      const nhtsaResponse = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
      const nhtsaData = await nhtsaResponse.json();

      if (!nhtsaData.Results || nhtsaData.Results.length === 0) {
        throw new Error('Failed to decode VIN');
      }

      // Extract basic vehicle information
      const results = nhtsaData.Results;
      const yearItem = results.find((item: any) => item.Variable === 'Model Year');
      const makeItem = results.find((item: any) => item.Variable === 'Make');
      const modelItem = results.find((item: any) => item.Variable === 'Model');
      const trimItem = results.find((item: any) => item.Variable === 'Trim');

      const year = yearItem?.Value || '';
      const make = makeItem?.Value || '';
      const model = modelItem?.Value || '';
      const trim = trimItem?.Value || '';

      if (!year || !make || !model) {
        throw new Error('Could not extract complete vehicle information');
      }

      // Get vehicle image and market value from MarketCheck API
      let userMileage = 0;
      if (mileage) {
        const parsedMileage = parseInt(mileage, 10); // Add radix 10
        if (!isNaN(parsedMileage)) {
          userMileage = parsedMileage;
        }
      }
      
      // Use our optimized MarketCheck API utility
      const marketCheckData = await getVehicleImageAndPricing({
        year,
        make,
        model,
        trim,
        mileage: userMileage
      });
      
      let imageUrl = marketCheckData.imageUrl;
      let estimatedValue = marketCheckData.estimatedValue;

      // If we couldn't get a value from MarketCheck, use a fallback calculation
      if (estimatedValue === 0) {
        estimatedValue = calculateFallbackVehicleValue(year, userMileage);
      }

      // Calculate loan amount (30% of vehicle value)
      const loanAmount = estimatedValue * 0.3;

      // Set the vehicle information
      const vehicleData = {
        year,
        make,
        model,
        trim,
        mileage: userMileage,
        value: estimatedValue,
        loanAmount,
        imageUrl
      };

      setVehicleInfo(vehicleData);
      
      // Notify parent component if callback is provided
      if (onVehicleInfoChange) {
        onVehicleInfoChange(vehicleData);
      }
    } catch (err) {
      console.error('Error decoding VIN:', err);
      setError('Failed to decode VIN. Please check the VIN and try again.');
      setVehicleInfo(null);
      
      if (onVehicleInfoChange) {
        onVehicleInfoChange(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'vin'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('vin')}
          >
            VIN Lookup
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'details'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('details')}
          >
            Vehicle Details
          </button>
        </div>
      </div>

      {activeTab === 'vin' && (
        <div>
          <label htmlFor="vin" className="block text-gray-700 font-medium mb-2">
            Vehicle Identification Number (VIN)
          </label>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              id="vin"
              className="form-control flex-grow"
              placeholder="Enter 17-character VIN"
              value={vin}
              onChange={handleVinChange}
              maxLength={17}
            />
            <input
              type="text"
              id="mileage"
              className="form-control md:w-1/3"
              placeholder="Mileage (optional)"
              value={mileage}
              onChange={handleMileageChange}
            />
            <button
              className="bg-primary-800 hover:bg-primary-900 text-white font-bold py-2 px-4 rounded-md"
              onClick={decodeVin}
              disabled={isLoading}
            >
              {isLoading ? 'Decoding...' : 'Decode VIN'}
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Found on your vehicle registration, insurance card, or driver's side door jamb
          </p>
        </div>
      )}

      {activeTab === 'details' && (
        <div>
          <p>Manual vehicle details entry coming soon</p>
        </div>
      )}

      {error && <div className="mt-4 text-red-600">{error}</div>}

      {vehicleInfo && (
        <div className="mt-6 p-4 border-l-4 border-yellow-400 bg-gray-50">
          <h3 className="text-xl font-bold mb-3">Vehicle Information:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold">
                {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model}
              </p>
              {vehicleInfo.trim && <p className="text-gray-700">Trim: {vehicleInfo.trim}</p>}
              {vehicleInfo.mileage > 0 && (
                <p className="text-gray-700">Mileage: {vehicleInfo.mileage.toLocaleString()} miles</p>
              )}
              
              <div className="mt-4">
                <p className="text-gray-700">Estimated Value: <span className="font-semibold">${Math.round(vehicleInfo.value).toLocaleString()}</span></p>
                <p className="text-gray-700">Max Loan Amount: <span className="font-semibold text-green-600">${Math.round(vehicleInfo.loanAmount).toLocaleString()}</span></p>
              </div>
              
              <p className="mt-4 text-sm text-gray-600">
                This information will be automatically added to your application.
              </p>
            </div>
            
            {vehicleInfo.imageUrl ? (
              <div className="relative h-48 md:h-auto">
                <Image 
                  src={vehicleInfo.imageUrl} 
                  alt={`${vehicleInfo.year} ${vehicleInfo.make} ${vehicleInfo.model}`}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 md:h-auto bg-gray-100 rounded-md">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VinDecoder;
