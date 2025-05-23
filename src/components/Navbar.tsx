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

  // Effect to handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-light py-2 shadow-md' : 'bg-light py-4'}`}> {/* Updated to bg-light */}
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-primary text-2xl font-bold"> {/* Updated to text-primary */}
          Express Title
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-body hover:text-link transition-colors"> {/* Updated colors */}
            Home
          </Link>
          <Link href="/how-it-works" className="text-body hover:text-link transition-colors"> {/* Updated colors */}
            How It Works
          </Link>
          <Link href="/locations" className="text-body hover:text-link transition-colors"> {/* Updated colors */}
            Locations
          </Link>
          <Link href="/contact" className="text-body hover:text-link transition-colors"> {/* Updated colors */}
            Contact
          </Link>
          <a 
            href="https://3ivsauc4tprqw82xagy4.app.clientclub.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-body hover:text-link transition-colors" /* Updated colors */
          >
            Client Portal
          </a>
        </nav>

        {/* Apply Now Button */}
        <Link 
          href="/apply-now" 
          className="hidden md:block bg-secondary text-light hover:bg-secondary/80 font-bold py-2 px-6 rounded-md transition-colors" /* Updated colors */
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary focus:outline-none" /* Updated to text-primary */
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu-sheet"
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

      {/* Bottom Sheet Mobile Menu */}
      <div
        id="mobile-menu-sheet"
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-light border-t border-border-neutral shadow-[-2px_0px_10px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        } p-5 max-h-[70vh] overflow-y-auto flex flex-col`} // Updated bg-light, border-border-neutral
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="mobile-menu-title" className="text-xl font-semibold text-heading">Menu</h2> {/* Updated to text-heading */}
          <button 
            onClick={toggleMenu} 
            aria-label="Close menu" 
            className="text-primary p-1" /* Updated to text-primary */
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-1 flex-grow"> {/* Added flex-grow */}
          <Link href="/" onClick={toggleMenu} className="block py-3 text-body hover:text-link text-lg rounded-md hover:bg-bg-subtle transition-colors">Home</Link> {/* Updated colors */}
          <Link href="/how-it-works" onClick={toggleMenu} className="block py-3 text-body hover:text-link text-lg rounded-md hover:bg-bg-subtle transition-colors">How It Works</Link> {/* Updated colors */}
          <Link href="/locations" onClick={toggleMenu} className="block py-3 text-body hover:text-link text-lg rounded-md hover:bg-bg-subtle transition-colors">Locations</Link> {/* Updated colors */}
          <Link href="/contact" onClick={toggleMenu} className="block py-3 text-body hover:text-link text-lg rounded-md hover:bg-bg-subtle transition-colors">Contact</Link> {/* Updated colors */}
          <a 
            href="https://3ivsauc4tprqw82xagy4.app.clientclub.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMenu} 
            className="block py-3 text-body hover:text-link text-lg rounded-md hover:bg-bg-subtle transition-colors" /* Updated colors */
          >
            Client Portal
          </a>
          <Link 
            href="/apply-now" 
            onClick={toggleMenu} 
            className="block bg-secondary text-light hover:bg-secondary/80 font-bold py-3 px-6 rounded-md text-center text-lg mt-auto" /* Updated colors */
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
