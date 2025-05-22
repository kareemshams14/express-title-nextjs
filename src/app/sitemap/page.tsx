import React from 'react';
import Link from 'next/link';

const SitemapPage = () => {
  return (
    <main className="container-custom py-8">
      {/* Updated h1 to match global styles and theme colors */}
      <h1 className="text-4xl font-bold mb-6 text-primary-800">Sitemap</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          This page provides a sitemap for easy navigation.
        </p>
        {/* Updated h2 to match global styles and theme colors */}
        <h2 className="text-3xl font-bold mt-6 mb-4 text-primary-800">Main Pages</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            {/* Updated link colors to match theme */}
            <Link href="/" className="text-secondary-400 hover:text-secondary-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className="text-secondary-400 hover:text-secondary-500 hover:underline">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/locations" className="text-secondary-400 hover:text-secondary-500 hover:underline">
              Locations
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-secondary-400 hover:text-secondary-500 hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/apply-now" className="text-secondary-400 hover:text-secondary-500 hover:underline">
              Apply Now
            </Link>
          </li>
        </ul>
        {/* Placeholder for other sections like legal pages if needed later */}
      </div>
    </main>
  );
};

export default SitemapPage;
