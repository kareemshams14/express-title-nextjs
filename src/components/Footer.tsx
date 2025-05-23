import React from 'react';
import Link from 'next/link';

// Assuming Social media icons are still desired, import them if they are separate components or use SVGs.

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-body border-t border-border-neutral"> {/* Updated colors */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8"> {/* Changed to lg:grid-cols-3 as per current link categories */}
          
          {/* Column 1: Informational / Legal */}
          <div>
            <h3 className="text-lg font-semibold text-heading mb-4">Informational & Legal</h3> {/* Updated color */}
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-link hover:text-link-hover hover:underline">Privacy Policy</Link></li> {/* Updated colors */}
              <li><Link href="/terms-of-use" className="text-link hover:text-link-hover hover:underline">Terms of Use</Link></li> {/* Updated colors */}
              <li><Link href="/accessibility" className="text-link hover:text-link-hover hover:underline">Accessibility Statement</Link></li> {/* Updated colors */}
              <li><Link href="/sitemap" className="text-link hover:text-link-hover hover:underline">Sitemap</Link></li> {/* Updated colors */}
            </ul>
          </div>

          {/* Column 2: Company / Help */}
          <div>
            <h3 className="text-lg font-semibold text-heading mb-4">Company & Help</h3> {/* Updated color */}
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-link hover:text-link-hover hover:underline">About Us</Link></li> {/* Updated colors */}
              <li><Link href="/contact" className="text-link hover:text-link-hover hover:underline">Contact Us</Link></li> {/* Updated colors */}
              <li><Link href="/faqs" className="text-link hover:text-link-hover hover:underline">FAQs</Link></li> {/* Updated colors */}
              <li><Link href="/blog" className="text-link hover:text-link-hover hover:underline">Blog</Link></li> {/* Updated colors */}
            </ul>
          </div>

          {/* Column 3: Product / Service */}
          <div>
            <h3 className="text-lg font-semibold text-heading mb-4">Loan Resources</h3> {/* Updated color */}
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-link hover:text-link-hover hover:underline">How It Works</Link></li> {/* Updated colors */}
              <li><Link href="/loan-types" className="text-link hover:text-link-hover hover:underline">Compare Title Loan Options</Link></li> {/* Updated colors */}
              <li><Link href="/rates-terms" className="text-link hover:text-link-hover hover:underline">Rates & Terms</Link></li> {/* Updated colors */}
              <li><Link href="/florida-disclosures" className="text-link hover:text-link-hover hover:underline">Florida Disclosures</Link></li> {/* Updated colors */}
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
        <div className="border-t border-border-neutral pt-8 mt-8 text-center text-sm"> {/* Updated border color */}
          <p className="mb-4">
            &copy; {currentYear} Express Title. All Rights Reserved. {/* User to replace YourCompanyName */}
          </p>
          <div className="text-xs text-body opacity-80 space-y-2"> {/* Updated text color and added opacity */}
            <p>
              Licensed under Florida Title Loan Act – Chapter 537. License #TL-123456
            </p>
            <p>
              Annual Percentage Rate (APR) may range from 30% to 264% depending on loan amount and repayment terms. A lien will be placed on your vehicle until the loan is repaid in full. Borrowers must retain full ownership of the vehicle during the term of the loan. Title loan agreements are subject to Florida Statutes Chapter 537. Late or missed payments may result in additional fees and/or repossession. You have the right to cancel this loan without penalty by 5 PM the next business day.
            </p>
          </div>
          {/* Trust Badges Section */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
            <img src="/images/badges/ssl-secure-badge.png" alt="SSL Secured" className="h-8" />
            <img src="/images/badges/bbb-accredited.svg" alt="BBB Accredited Business" className="h-8" />
            <img src="/images/badges/plaid-partner-badge.svg" alt="Plaid Verified Partner" className="h-8" />
            <img src="/images/badges/twilio-partner-badge.svg" alt="Powered by Twilio SMS" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
