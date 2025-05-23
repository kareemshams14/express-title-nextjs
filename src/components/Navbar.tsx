"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cvDarkBlue shadow-md py-2' : 'bg-cvDarkBlue py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-cvTextLight text-2xl font-bold">
          Express Title
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-cvTextLight hover:text-cvLightBlue transition-colors">
            Home
          </Link>
          <Link href="/how-it-works" className="text-cvTextLight hover:text-cvLightBlue transition-colors">
            How It Works
          </Link>
          <Link href="/locations" className="text-cvTextLight hover:text-cvLightBlue transition-colors">
            Locations
          </Link>
          <Link href="/contact" className="text-cvTextLight hover:text-cvLightBlue transition-colors">
            Contact
          </Link>
          <a 
            href="https://3ivsauc4tprqw82xagy4.app.clientclub.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cvTextLight hover:text-cvLightBlue transition-colors"
          >
            Client Portal
          </a>
        </nav>

        {/* Apply Now Button */}
        <Link 
          href="/apply-now" 
          className="hidden md:block bg-cvBlue hover:bg-cvLightBlue text-cvTextLight font-bold py-2 px-6 rounded-md transition-colors"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cvTextLight focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-cvDarkBlue overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}
      >
        <div className="container-custom flex flex-col space-y-4">
          <Link 
            href="/" 
            className="text-cvTextLight hover:text-cvLightBlue transition-colors py-2 border-b border-cvTextDark/50" // Using cvTextDark with opacity for border
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/how-it-works" 
            className="text-cvTextLight hover:text-cvLightBlue transition-colors py-2 border-b border-cvTextDark/50"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="/locations" 
            className="text-cvTextLight hover:text-cvLightBlue transition-colors py-2 border-b border-cvTextDark/50"
            onClick={() => setIsMenuOpen(false)}
          >
            Locations
          </Link>
          <Link 
            href="/contact" 
            className="text-cvTextLight hover:text-cvLightBlue transition-colors py-2 border-b border-cvTextDark/50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="https://3ivsauc4tprqw82xagy4.app.clientclub.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cvTextLight hover:text-cvLightBlue transition-colors py-2 border-b border-cvTextDark/50"
            onClick={() => setIsMenuOpen(false)}
          >
            Client Portal
          </a>
          <Link 
            href="/apply-now" 
            className="bg-cvBlue hover:bg-cvLightBlue text-cvTextLight font-bold py-3 px-6 rounded-md transition-colors text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
