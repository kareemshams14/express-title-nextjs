// MarketCheck API utility functions
interface MarketCheckConfig {
  apiKey: string;
  apiSecret: string;
}

export const MARKETCHECK_CONFIG: MarketCheckConfig = {
  apiKey: 'FKuNuPaPLi2RDWHLY7NGuFPnJvx53dS0',
  apiSecret: '5yxomBGfBvmGpKjJ'
};

interface MarketCheckResponse {
  imageUrl: string | null;
  estimatedValue: number | null; // Updated to allow null if API returns null
}

/**
 * Fetches vehicle image and pricing data from our internal API endpoint.
 */
export async function getVehicleImageAndPricing(
  vin: string
): Promise<MarketCheckResponse> {
  console.log(`Processing VIN: ${vin}`);
  
  // Default response in case of failure
  const defaultResponse: MarketCheckResponse = {
    imageUrl: null,
    estimatedValue: 0 // Fallback to 0 if API fails or returns no value
  };
  
  try {
    const internalApiUrl = `/api/marketcheck?vin=${vin}`;
    console.log(`Calling internal API: ${internalApiUrl}`);
    
    // Make the API request to our internal endpoint
    const response = await fetch(internalApiUrl);
    
    if (!response.ok) {
      throw new Error(`Internal API error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`Received response from internal API: ${JSON.stringify(data)}`);
    
    // Ensure that estimatedValue is a number, defaulting to 0 if null or undefined
    const estimatedValue = data.estimatedValue !== null && data.estimatedValue !== undefined 
      ? Number(data.estimatedValue) 
      : 0;

    return {
      imageUrl: data.imageUrl,
      estimatedValue: estimatedValue
    };
  } catch (error) {
    console.error('Error fetching data from internal API:', error);
    // Attempt to use fallback calculation if year can be extracted from VIN or is otherwise available
    // For now, just returning defaultResponse as vehicle year is not directly available here.
    // Consider modifying to pass year or enhance VIN decoding for more robust fallback.
    return defaultResponse; 
  }
}

/**
 * Calculates a fallback vehicle value when MarketCheck API fails
 */
export function calculateFallbackVehicleValue(year: string, mileage: number = 0): number {
  // This function remains as a fallback, though it's not directly used by the modified 
  // getVehicleImageAndPricing unless explicitly called by the component using it.
  // The primary function now relies on the internal API's error handling and default responses.
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(year);
  const baseValue = 30000; // Arbitrary base value
  
  // Apply depreciation based on age
  let calculatedValue = Math.max(baseValue - (age * 2000), 5000);
  
  // Apply additional depreciation based on mileage if available
  if (mileage > 0) {
    // Roughly 10% value reduction per 50,000 miles
    const mileageDepreciation = (mileage / 50000) * 0.1;
    calculatedValue = calculatedValue * (1 - Math.min(mileageDepreciation, 0.8));
  }
  
  return Math.max(Math.round(calculatedValue), 1000); // Minimum $1000
}
