// MarketCheck API utility functions

// Define interfaces for MarketCheck API response
interface Media {
  photo_links?: string[];
}

interface Listing {
  media?: Media;
  miles?: number;
  price?: number;
  // Potentially other fields, but these are what's currently used or checked.
}

interface MarketCheckApiResponse {
  listings?: Listing[];
  // Potentially other fields, but 'listings' is what's currently used.
}

interface MarketCheckConfig {
  apiKey: string;
  apiSecret: string;
}

export const MARKETCHECK_CONFIG: MarketCheckConfig = {
  apiKey: process.env.MARKETCHECK_API_KEY || '',
  apiSecret: process.env.MARKETCHECK_API_SECRET || ''
};

// Early check for API keys
if (!MARKETCHECK_CONFIG.apiKey || !MARKETCHECK_CONFIG.apiSecret) {
  console.warn(
    'MarketCheck API key/secret not configured. Features using MarketCheck may not work.'
  );
  // Depending on the application's needs, you might throw an error here in production:
  // throw new Error('MarketCheck API key/secret not configured.');
}

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
    
    const data: MarketCheckApiResponse = await response.json();
    
    if (!data.listings || data.listings.length === 0) {
      return defaultResponse;
    }
    
    // Find the first listing with an image
    const listingWithImage = data.listings.find((listing: Listing) => 
      listing.media && listing.media.photo_links && listing.media.photo_links.length > 0
    );
    
    let imageUrl = null;
    if (listingWithImage && listingWithImage.media && listingWithImage.media.photo_links && listingWithImage.media.photo_links.length > 0) {
      // Get the first image (exterior view)
      imageUrl = listingWithImage.media.photo_links[0];
    }
    
    // Calculate estimated value based on mileage if provided
    let estimatedValue = 0;
    
    if (mileage && mileage > 0) {
      // Find listings with similar mileage (±20%)
      const similarMileageListings = data.listings.filter((listing: Listing) => {
        const listingMiles = listing.miles || 0;
        const lowerBound = mileage * 0.8;
        const upperBound = mileage * 1.2;
        return listing.price && listing.price > 0 && listingMiles >= lowerBound && listingMiles <= upperBound;
      });
      
      if (similarMileageListings.length > 0) {
        // Calculate average price from similar mileage listings
        const totalPrice = similarMileageListings.reduce(
          (sum: number, listing: Listing) => sum + (listing.price || 0), 
          0
        );
        estimatedValue = totalPrice / similarMileageListings.length;
      } else {
        // If no similar mileage listings, use all listings with prices
        const validPrices = data.listings
          .filter((listing: Listing) => listing.price && listing.price > 0)
          .map((listing: Listing) => listing.price as number); // Assert price is number due to filter
        
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
        .filter((listing: Listing) => listing.price && listing.price > 0)
        .map((listing: Listing) => listing.price as number); // Assert price is number due to filter
      
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
  const currentYear = new Date().getFullYear();
  const parsedYear = parseInt(year, 10);
  const MINIMUM_YEAR = 1900;
  const MINIMUM_FALLBACK_VALUE = 1000;

  if (isNaN(parsedYear) || parsedYear > currentYear + 1 || parsedYear < MINIMUM_YEAR) {
    console.warn(
      `Invalid year provided to calculateFallbackVehicleValue: ${year}. Returning default minimum fallback.`
    );
    return MINIMUM_FALLBACK_VALUE;
  }

  // Simple fallback calculation based on year and mileage
  const age = currentYear - parsedYear;
  const baseValue = 30000; // Arbitrary base value
  
  // Apply depreciation based on age
  // Ensure age is not negative if parsedYear is currentYear + 1 (new models)
  const effectiveAge = Math.max(0, age);
  // Removed the intermediate floor of 5000 to let the final MINIMUM_FALLBACK_VALUE take precedence
  let calculatedValue = baseValue - (effectiveAge * 2000);
  
  // Apply additional depreciation based on mileage if available
  if (mileage > 0) {
    // Roughly 10% value reduction per 50,000 miles
    const mileageDepreciation = (mileage / 50000) * 0.1;
    // Allow mileage to reduce value more significantly, down to 0 if depreciation is 100% or more.
    // The final Math.max with MINIMUM_FALLBACK_VALUE will ensure it doesn't go below that.
    calculatedValue = calculatedValue * Math.max(0, (1 - mileageDepreciation));
  }
  
  return Math.max(Math.round(calculatedValue), MINIMUM_FALLBACK_VALUE);
}
