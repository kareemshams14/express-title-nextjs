import React from 'react';
import Link from 'next/link';

// Assuming Social media icons are still desired, import them if they are separate components or use SVGs.

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-cvTextDark border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8"> {/* Changed to lg:grid-cols-3 as per current link categories */}
          
          {/* Column 1: Informational / Legal */}
          <div>
            <h3 className="text-lg font-semibold text-cvDarkBlue mb-4">Informational & Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Terms of Use</Link></li>
              <li><Link href="/accessibility" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Accessibility Statement</Link></li>
              <li><Link href="/sitemap" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 2: Company / Help */}
          <div>
            <h3 className="text-lg font-semibold text-cvDarkBlue mb-4">Company & Help</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-cvBlue hover:text-cvDarkBlue hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Contact Us</Link></li>
              <li><Link href="/faqs" className="text-cvBlue hover:text-cvDarkBlue hover:underline">FAQs</Link></li>
              <li><Link href="/blog" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Product / Service */}
          <div>
            <h3 className="text-lg font-semibold text-cvDarkBlue mb-4">Product & Service</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-cvBlue hover:text-cvDarkBlue hover:underline">How It Works</Link></li>
              <li><Link href="/loan-types" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Loan Types</Link></li>
              <li><Link href="/rates-terms" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Rates & Terms</Link></li>
              <li><Link href="/florida-disclosures" className="text-cvBlue hover:text-cvDarkBlue hover:underline">Florida Disclosures</Link></li>
            </ul>
          </div>

          {/* Optional 4th Column (e.g., for social media, logo, or if content is too dense for 3 cols) */}
          {/* For now, keeping it to 3 main content columns based on user's list.
              If social media icons are still needed, they could go here or be integrated differently.
              The previous footer had social icons. Let's omit them for this pass to focus on the links and structure,
              they can be added back if requested.
          */}

        </div>

        {/* Copyright and Disclaimer Placeholder Section */}
        <div className="border-t border-gray-300 pt-8 mt-8 text-center text-sm">
          <p className="mb-4">
            &copy; {currentYear} YourCompanyName. All Rights Reserved. {/* User to replace YourCompanyName */}
          </p>
          <div className="text-xs text-gray-500 space-y-2">
            <p>
              [Placeholder for important disclaimers, licensing information, and other legal text provided by the user.]
            </p>
            <p>
              [Further placeholder lines for extensive disclaimer text, to mimic density of Instaloan footer if needed.]
            </p>
            <p>
              [Address and other contact information can also be placed here if desired.]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
