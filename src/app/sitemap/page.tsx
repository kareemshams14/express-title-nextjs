import React from 'react';

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cvBlue mb-4">Sitemap</h1>
      <p className="text-cvTextDark">
        [Sitemap content or links will be generated or added here.]
      </p>
      {/* Example placeholder links */}
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li><a href="/" className="text-cvBlue hover:underline">Home</a></li>
        <li><a href="/about-us" className="text-cvBlue hover:underline">About Us</a></li>
        <li><a href="/contact" className="text-cvBlue hover:underline">Contact Us</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}
