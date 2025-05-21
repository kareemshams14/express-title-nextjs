import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VinDecoder from '@/components/VinDecoder';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Express Title | Florida Title Loans',
  description: 'Get fast cash with your vehicle title in minutes. No credit needed. Licensed Florida Lender.',
};

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

      {/* Process Steps */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="process-number mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-center">Apply</h3>
              <p className="text-gray-700">Complete our simple application online or visit one of our Florida locations.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="process-number mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-center">Qualify</h3>
              <p className="text-gray-700">Get approved based on your vehicle's value, not your credit score.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="process-number mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-center">Get Cash</h3>
              <p className="text-gray-700">Receive your funds quickly, often on the same day you apply.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle Estimator */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center mb-8">See What Your Vehicle Is Worth</h2>
            <p className="text-center text-lg mb-8">Enter your VIN or vehicle details to get an instant estimate of how much you could qualify for.</p>

            <VinDecoder onVehicleInfoChange={(info: any) => setVehicleInfo(info)} />

            {vehicleInfo && (
              <div className="mt-8 text-center">
                <Link 
                  href={{
                    pathname: '/apply-now',
                    query: {
                      year: vehicleInfo.year,
                      make: vehicleInfo.make,
                      model: vehicleInfo.model,
                      value: Math.round(vehicleInfo.value),
                      loan: Math.round(vehicleInfo.loanAmount)
                    }
                  }}
                  className="btn-primary text-lg px-8 py-3"
                >
                  Apply Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Express Title</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Same-Day Funding</h3>
              <p className="text-gray-700">Get your cash quickly, often on the same day you apply.</p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Keep Your Vehicle</h3>
              <p className="text-gray-700">Continue driving your car while repaying your loan.</p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">No Perfect Credit Needed</h3>
              <p className="text-gray-700">Your vehicle's value is what matters, not your credit score.</p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Licensed Florida Lender</h3>
              <p className="text-gray-700">We're fully licensed under Florida Chapter 537.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center mb-4" aria-label="5-star review">
                <div className="text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-700 mb-4">"I needed cash fast for an emergency, and Express Title came through for me. The process was quick and easy, and I got my money the same day!"</p>
              <p className="font-semibold">- Sarah M.</p>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center mb-4" aria-label="5-star review">
                <div className="text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-700 mb-4">"I was worried about my credit score, but Express Title based my loan on my car's value. The staff was friendly and helpful throughout the process."</p>
              <p className="font-semibold">- Michael T.</p>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center mb-4" aria-label="5-star review">
                <div className="text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-700 mb-4">"The online application was simple, and I was able to get approved without even leaving my house. I highly recommend Express Title!"</p>
              <p className="font-semibold">- Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Apply now to see how much you can qualify for with your vehicle title. The process is quick, easy, and you'll get an instant decision.</p>
          <Link href="/apply-now" className="btn-primary text-lg px-8 py-3">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="bg-gray-100 py-8">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <p className="mb-2"><strong>Disclaimer:</strong> Express Title is licensed under Florida Chapter 537. Loan approval and amounts are subject to vehicle inspection, appraisal, and vehicle ownership verification. Not all applicants will qualify. Minimum loan amount varies by state.</p>
            <p>Title loans should be used for short-term financial needs only, not as a long-term financial solution. Customers with credit difficulties should seek credit counseling.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
