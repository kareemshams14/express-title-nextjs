import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Get Cash Fast with Your Car Title</h1>
            <p className="text-lg text-gray-700">Express Title offers quick and easy auto title loans with competitive rates. Get approved in minutes and keep driving your car.</p>
            <div className="flex gap-4">
              <Link href="/apply-now" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">Apply Now</Link>
              <Link href="/how-it-works" className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">Learn More</Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src="/images/hero-image.png" alt="Car with cash" width={500} height={400} priority />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Choose Express Title?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Fast Approval</h3>
              <p>Get approved in as little as 30 minutes and receive cash the same day.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Keep Your Car</h3>
              <p>Continue driving your vehicle while repaying your loan.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Simple Requirements</h3>
              <p>Just need your car, clear title, ID, and proof of income.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
              <p>We offer some of the best rates in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image src="/images/process/step1-signing.png" alt="Apply" width={300} height={200} />
              <h3 className="text-xl font-bold">Apply Online or In-Person</h3>
              <p>Fill out our simple application online or visit one of our convenient locations.</p>
            </div>
            <div className="space-y-4">
              <Image src="/images/process/step2-inspection.png" alt="Inspection" width={300} height={200} />
              <h3 className="text-xl font-bold">Get Approved</h3>
              <p>Our team will verify your info and inspect your vehicle to determine your loan amount.</p>
            </div>
            <div className="space-y-4">
              <Image src="/images/process/step3-smiling.png" alt="Cash" width={300} height={200} />
              <h3 className="text-xl font-bold">Get Your Cash</h3>
              <p>Once approved, receive your cash immediately and drive away in your car.</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/how-it-works" className="text-blue-600 underline">Learn More About Our Process</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded shadow">
              <p>"I needed cash quickly for an emergency and Express Title came through. The process was fast and easy."</p>
              <p className="mt-4 font-semibold">Sarah J. - St. Petersburg, FL</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <p>"I was approved in less than an hour and had the money I needed the same day. Highly recommended."</p>
              <p className="mt-4 font-semibold">Michael T. - Clearwater, FL</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <p>"They explained everything clearly and made the process hassle-free. Excellent service!"</p>
              <p className="mt-4 font-semibold">Lisa R. - Largo, FL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">Apply now and get the cash you need today!</p>
          <Link href="/apply-now" className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-blue-50">Apply Now</Link>
        </div>
      </section>
    </main>
  );
}
