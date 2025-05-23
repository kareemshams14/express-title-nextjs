'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import VinDecoder from '@/components/VinDecoder';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';
import LoanCalculator from '@/components/LoanCalculator'; // Added import

export default function Home() {
  const [vehicleInfo, setVehicleInfo] = React.useState<any>(null);

  const testimonials = [ // Added testimonials data
    { stars: 5, quote: "I got approved in under 30 minutes and walked out with cash the same day. Super easy process!", author: "Jasmine T.", location: "Orlando, FL" },
    { stars: 4, quote: "I was nervous about using my car title, but they explained everything clearly. No surprises.", author: "Mark R.", location: "Tampa, FL" },
    { stars: 5, quote: "Quick, friendly, and no credit check needed. Helped me cover a last-minute expense.", author: "Latoya S.", location: "Fort Lauderdale, FL" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative flex flex-col items-center justify-start min-h-[70vh] text-light bg-cover bg-center" /* Updated text-cvTextLight to text-light */
        style={{ backgroundImage: "url('/images/hero-premium.png')" }}
      >
        {/* Optional: Dark overlay for contrast can be added here if needed */}
        {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
        
        <div className="relative z-10 flex flex-col items-center text-center pt-[25vh] p-4 sm:p-6 md:p-8 w-full max-w-3xl"> {/* Added w-full and max-w-3xl for better text block width control */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Cash Today—Keep Driving Tomorrow.</h1> {/* Heading color will be from globals.css */}
          <p className="text-lg mb-8 sm:max-w-xl md:max-w-2xl">Get approved for a title loan and receive cash in as little as 30 minutes. Keep driving your car while you repay your loan.</p> {/* Paragraph color will be from text-light on parent section */}
          <Link href="/apply-now" className="bg-light text-secondary hover:bg-bg-subtle font-semibold py-3 px-8 rounded shadow text-lg"> {/* Updated colors */}
            See What You Qualify For
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-bg-subtle"> {/* Increased padding */}
        <div className="container-custom">
          {/* text-cvDarkBlue class removed, h2 will inherit color from globals.css base style */}
          <h2 className="text-3xl font-bold text-center mb-10 md:mb-12"> 
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                stars={testimonial.stars}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-16 md:py-24 bg-light"> {/* Increased padding */}
        <div className="container-custom">
          {/* text-cvDarkBlue class removed, h2 will inherit color from globals.css base style */}
          <h2 className="text-3xl font-bold text-center mb-10 md:mb-12">
            Estimate Your Loan
          </h2>
          <div className="max-w-2xl mx-auto"> {/* Constrain width */}
            <LoanCalculator
              vehicleValue={10000} // Default estimated vehicle value
              showVehicleValueInput={true} // Allow user to edit this value
              // initialLoanAmount={1000} // Optional: set a default loan amount (left undefined)
            />
          </div>
        </div>
      </section>

      {/* ... rest of the sections remain unchanged ... */}

    </main>
  );
}
