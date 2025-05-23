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

    console.log(`Data from Marketcheck: ${JSON.stringify(data)}`);

    let imageUrl = null;
    if (data.listings && data.listings[0] && data.listings[0].media && data.listings[0].media.photo_links && data.listings[0].media.photo_links[0]) {
      imageUrl = data.listings[0].media.photo_links[0];
    }

    let estimatedValue = null;
    if (data.listings && data.listings[0] && data.listings[0].price) {
      estimatedValue = data.listings[0].price;
    }

    console.log(`Extracted imageUrl: ${imageUrl}`);
    console.log(`Extracted estimatedValue: ${estimatedValue}`);

    return NextResponse.json({ imageUrl, estimatedValue });
  } catch (error) {
    console.error(`Error fetching data from Marketcheck: ${error}`);
    return NextResponse.json({ error: 'Failed to fetch data from Marketcheck' }, { status: 500 });
  }
}
