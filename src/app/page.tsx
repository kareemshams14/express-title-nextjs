'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VinDecoder from '@/components/VinDecoder';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [vehicleInfo, setVehicleInfo] = React.useState<any>(null);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section bg-primary-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Need Fast Cash? Use Your Vehicle Title Today.</h1>
              <p className="text-lg mb-8">Get approved for a title loan and receive cash in as little as 30 minutes. Keep driving your car while you repay your loan.</p>
              <Link href="/apply-now" className="btn-primary text-lg px-8 py-3">
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

      <Footer />
    </main>
  );
}
