// MarketCheck API utility functions
interface MarketCheckConfig {
  apiKey: string;
  apiSecret: string;
}

export const MARKETCHECK_CONFIG: MarketCheckConfig = {
  apiKey: 'FKuNuPaPLi2RDWHLY7NGuFPnJvx53dS0',
  apiSecret: '5yxomBGfBvmGpKjJ'
};

interface VehicleDetails {
  year: string;
  make: string;
  model: string;
  trim?: string;
  mileage?: number;
}

interface MarketCheckResponse {
  imageUrl: string | null;
  estimatedValue: number;
}

/**
 * Fetches vehicle image and pricing data from MarketCheck API
 * Optimized for speed by limiting data and using efficient queries
 */
export async function getVehicleImageAndPricing(
  vehicleDetails: VehicleDetails
): Promise<MarketCheckResponse> {
  const { year, make, model, mileage } = vehicleDetails;
  const { apiKey } = MARKETCHECK_CONFIG;
  
  // Default response in case of failure
  const defaultResponse: MarketCheckResponse = {
    imageUrl: null,
    estimatedValue: 0
  };
  
  try {
    // Construct the base URL for MarketCheck API
    let marketCheckUrl = `https://marketcheck-prod.apigee.net/v2/search/car/active?api_key=${apiKey}&year=${year}&make=${make}&model=${model}`;
    
    // Add mileage parameter if available for more accurate pricing
    if (mileage && mileage > 0) {
      marketCheckUrl += `&miles=${mileage}`;
    }
    
    // Add parameters to optimize for speed
    marketCheckUrl += '&rows=5&photo_links=true&include_relevant_links=false';
    
    // Make the API request
    const response = await fetch(marketCheckUrl);
    
    if (!response.ok) {
      throw new Error(`MarketCheck API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.listings || data.listings.length === 0) {
      return defaultResponse;
    }
    
    // Find the first listing with an image
    const listingWithImage = data.listings.find((listing: any) => 
      listing.media && listing.media.photo_links && listing.media.photo_links.length > 0
    );
    
    let imageUrl = null;
    if (listingWithImage && listingWithImage.media.photo_links.length > 0) {
      // Get the first image (exterior view)
      imageUrl = listingWithImage.media.photo_links[0];
    }
    
    // Calculate estimated value based on mileage if provided
    let estimatedValue = 0;
    
    if (mileage && mileage > 0) {
      // Find listings with similar mileage (±20%)
      const similarMileageListings = data.listings.filter((listing: any) => {
        const listingMiles = listing.miles || 0;
        const lowerBound = mileage * 0.8;
        const upperBound = mileage * 1.2;
        return listingMiles >= lowerBound && listingMiles <= upperBound && listing.price > 0;
      });
      
      if (similarMileageListings.length > 0) {
        // Calculate average price from similar mileage listings
        const totalPrice = similarMileageListings.reduce(
          (sum: number, listing: any) => sum + listing.price, 
          0
        );
        estimatedValue = totalPrice / similarMileageListings.length;
      } else {
        // If no similar mileage listings, use all listings with prices
        const validPrices = data.listings
          .filter((listing: any) => listing.price && listing.price > 0)
          .map((listing: any) => listing.price);
        
        if (validPrices.length > 0) {
          estimatedValue = validPrices.reduce(
            (sum: number, price: number) => sum + price, 
            0
          ) / validPrices.length;
        }
      }
    } else {
      // Without mileage, just use average price
      const validPrices = data.listings
        .filter((listing: any) => listing.price && listing.price > 0)
        .map((listing: any) => listing.price);
      
      if (validPrices.length > 0) {
        estimatedValue = validPrices.reduce(
          (sum: number, price: number) => sum + price, 
          0
        ) / validPrices.length;
      }
    }
    
    return {
      imageUrl,
      estimatedValue: Math.round(estimatedValue)
    };
  } catch (error) {
    console.error('Error fetching MarketCheck data:', error);
    return defaultResponse;
  }
}

/**
 * Calculates a fallback vehicle value when MarketCheck API fails
 */
export function calculateFallbackVehicleValue(year: string, mileage: number = 0): number {
  // Simple fallback calculation based on year and mileage
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
