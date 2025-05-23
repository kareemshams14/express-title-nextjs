'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import VinDecoder from '@/components/VinDecoder';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [vehicleInfo, setVehicleInfo] = React.useState<any>(null);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section bg-cvBlue text-cvTextLight py-16 md:py-24"> {/* Updated hero section classes */}
        <div className="container-custom"> {/* Removed py-16 md:py-24 from here as it's on the parent */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Need Fast Cash? Use Your Vehicle Title Today.</h1> {/* Heading color will be inherited or can be explicitly set to text-cvTextLight if needed */}
              <p className="text-lg mb-8">Get approved for a title loan and receive cash in as little as 30 minutes. Keep driving your car while you repay your loan.</p>
              <Link href="/apply-now" className="bg-white text-cvBlue hover:bg-cvBgLight font-semibold py-3 px-8 rounded shadow text-lg"> {/* Updated button/link classes */}
                See What You Qualify For
              </Link>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image 
                src="/images/hero-image-new.png" 
                alt="Hero image showing woman next to car representing Express Title" 
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of the sections remain unchanged ... */}

    </main>
  );
}
