import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-primary-900 text-white flex-1 flex items-center">
        <div className="container-custom text-center py-24">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-primary text-lg px-8 py-3">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
