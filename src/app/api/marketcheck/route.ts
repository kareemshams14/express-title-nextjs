import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const vin = searchParams.get('vin');

  console.log(`Received VIN: ${vin}`);

  if (!vin) {
    return NextResponse.json({ error: 'VIN is required' }, { status: 400 });
  }

  const apiKey = 'YOUR_MARKETCHECK_API_KEY'; // Replace with your actual API key
  const marketcheckApiUrl = `https://marketcheck-prod.apigee.net/v2/search/car/active?api_key=${apiKey}&vins=${vin}`;

  console.log(`Constructed Marketcheck API URL: ${marketcheckApiUrl}`);

  try {
    const response = await fetch(marketcheckApiUrl);
    const data = await response.json();

    console.log(`Raw data from Marketcheck: ${JSON.stringify(data)}`);

    let imageUrl = null;
    let estimatedValue = null;

    if (data.listings && data.listings.length > 0) {
      const listing = data.listings[0];
      console.log('Full listing object:', JSON.stringify(listing, null, 2));

      // Extract estimatedValue
      if (listing.price) {
        estimatedValue = listing.price;
        console.log(`Extracted estimatedValue: ${estimatedValue} from listing.price`);
      } else {
        console.log('No listing.price found for estimatedValue.');
      }
      
      let imageUrl = null;

      // Attempt 1: Direct common fields
      if (listing.image_url) {
        imageUrl = listing.image_url;
        console.log('Image found via listing.image_url:', imageUrl);
      } else if (listing.photo_url) {
        imageUrl = listing.photo_url;
        console.log('Image found via listing.photo_url:', imageUrl);
      } else if (listing.media && listing.media.photo_url) {
        imageUrl = listing.media.photo_url;
        console.log('Image found via listing.media.photo_url:', imageUrl);
      }

      // Attempt 2: listing.media.photo_links
      if (!imageUrl && listing.media && listing.media.photo_links) {
        console.log('Attempting listing.media.photo_links:', JSON.stringify(listing.media.photo_links, null, 2));
        if (Array.isArray(listing.media.photo_links) && listing.media.photo_links.length > 0) {
          // Look for a link with a 'primary' indicator if possible (example, adjust if structure differs)
          const primaryLink = listing.media.photo_links.find((link: any) => typeof link === 'object' && link.rel === 'primary'); // This is a guess, actual structure might vary
          if (primaryLink && typeof primaryLink === 'object' && primaryLink.href) {
            imageUrl = primaryLink.href;
            console.log('Image found via primary link in listing.media.photo_links:', imageUrl);
          } else {
            // Fallback to the first URL in the array
            if (typeof listing.media.photo_links[0] === 'string') {
              imageUrl = listing.media.photo_links[0];
              console.log('Image found via first string in listing.media.photo_links array:', imageUrl);
            } else if (typeof listing.media.photo_links[0] === 'object' && listing.media.photo_links[0].href) {
              imageUrl = listing.media.photo_links[0].href;
              console.log('Image found via href of first object in listing.media.photo_links array:', imageUrl);
            }
          }
        } else if (typeof listing.media.photo_links === 'string') {
          imageUrl = listing.media.photo_links;
          console.log('Image found via listing.media.photo_links as a direct string:', imageUrl);
        }
      }

      // Attempt 3: listing.photos (similar logic to photo_links)
      if (!imageUrl && listing.photos && Array.isArray(listing.photos) && listing.photos.length > 0) {
        console.log('Attempting listing.photos:', JSON.stringify(listing.photos, null, 2));
        // Again, look for a primary indicator or take the first valid URL
        // This part would be similar to the photo_links logic, adapt based on actual structure of 'photos' objects
        // For brevity, assuming a simple structure for photos as well:
        if (typeof listing.photos[0] === 'string') {
          imageUrl = listing.photos[0];
          console.log('Image found via first string in listing.photos array:', imageUrl);
        } else if (typeof listing.photos[0] === 'object' && listing.photos[0].url) { // Common pattern is { url: '...' }
          imageUrl = listing.photos[0].url;
          console.log('Image found via url of first object in listing.photos array:', imageUrl);
        }
      }
      
      console.log('Final determined imageUrl:', imageUrl);

    } else {
      console.log('No listings found in Marketcheck response.');
    }

    // Ensure imageUrl and estimatedValue are defined (they are initialized to null)
    return NextResponse.json({ imageUrl, estimatedValue });
  } catch (error) {
    console.error(`Error fetching data from Marketcheck or processing response: ${error}`);
    return NextResponse.json({ error: 'Failed to fetch data from Marketcheck' }, { status: 500 });
  }
}
