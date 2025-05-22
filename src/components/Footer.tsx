import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Express Title</h3>
            {/* Paragraphs removed as per requirements */}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-yellow-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-yellow-400 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/apply-now" className="hover:text-yellow-400 transition-colors">
                  Apply Now
                </Link>
              </li>
              {/* Client Portal link removed */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal & Information</h3>
            {/* Contact details and social media icons removed */}
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility-statement" className="hover:text-yellow-400 transition-colors">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link href="/florida-consumer-disclosures" className="hover:text-yellow-400 transition-colors">
                  Florida Consumer Disclosures
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-yellow-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
            {/* Social media icons removed from this column to keep it focused on Legal & Information */}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Express Title. All rights reserved.</p>
          <p className="mt-2">
            Licensed by the Florida Office of Financial Regulation. License No. [PLACEHOLDER_LICENSE_NUMBER]
          </p>
          {/* Old legal links removed, new ones added to the "Legal & Information" column */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
