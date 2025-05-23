import React from 'react';
import Link from 'next/link';
// Using Heroicons for social media for a consistent and modern look.
// You might need to install @heroicons/react if not already: npm install @heroicons/react
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-primary-900 text-gray-200 py-12 font-sans">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Express Title</h3>
            <p className="text-sm mb-3">
              Your trusted partner for fast and reliable auto title loans in Florida. We provide the cash you need, when you need it.
            </p>
            <p className="text-xs text-gray-400">
              Licensed under Florida Chapter 537. <br />
              {/* Placeholder for additional license numbers if needed */}
              FL License No. [Your License Number Here]
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary-400 transition-colors">Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-secondary-400 transition-colors">How It Works</Link></li>
              <li><Link href="/locations" className="hover:text-secondary-400 transition-colors">Locations</Link></li>
              <li><Link href="/apply-now" className="hover:text-secondary-400 transition-colors">Apply Now</Link></li>
              <li><Link href="/blog" className="hover:text-secondary-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-secondary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-secondary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-secondary-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/accessibility-statement" className="hover:text-secondary-400 transition-colors">Accessibility Statement</Link></li>
              <li><Link href="/sitemap" className="hover:text-secondary-400 transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic text-sm">
              <p className="mb-1">Phone: <a href="tel:+15551234567" className="hover:text-secondary-400 transition-colors">(555) 123-4567</a></p>
              <p className="mb-1">Email: <a href="mailto:info@expresstitle.com" className="hover:text-secondary-400 transition-colors">info@expresstitle.com</a></p>
              <p className="mb-3">Hours: Mon-Fri: 9am-6pm, Sat: 10am-4pm</p>
            </address>
            <div className="flex space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Florida-Specific Disclaimer Section */}
        <div className="mt-10 pt-8 border-t border-primary-800 text-xs text-gray-400">
          <h4 className="font-semibold text-gray-300 mb-2">Florida Consumer Information:</h4>
          <p className="mb-2">
            Loan products and services offered by Express Title are subject to Florida state regulations. Eligibility, underwriting, and approval apply. Rates, terms, and conditions may vary. All loans are secured by a motor vehicle. Licensed under Florida Chapter 537.
          </p>
          <p>
            Please review all loan documents carefully before signing. If you have any questions, please contact us.
          </p>
          {/* Placeholder for additional required Florida disclosures */}
        </div>
        
        {/* Copyright Section */}
        <div className="mt-10 pt-8 border-t border-primary-800 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Express Title. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
