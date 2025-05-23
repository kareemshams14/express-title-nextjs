import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 text-center">How It Works</h1>
            <p className="text-lg mb-6 text-center max-w-2xl">
              Our simple process makes it easy to get the cash you need using your vehicle title as collateral.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="process-number">1</div>
                <h2 className="text-3xl font-bold mb-4">Apply Online or In-Person</h2>
                <p className="text-lg mb-4">
                  Start by filling out our simple application. You can apply online in minutes or visit one of our Florida locations for in-person assistance.
                </p>
                <p className="text-lg mb-6">
                  We'll need some basic information about you and your vehicle to get started.
                </p>
                <Link href="/apply-now" className="btn-primary">
                  Apply Now
                </Link>
              </div>
              <div className="order-1 md:order-2 relative h-64 md:h-80">
                <Image 
                  src="/images/process/step1-apply.jpg" 
                  alt="Apply Online or In-Person" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80">
                <Image 
                  src="/images/process/step2-approve.jpg" 
                  alt="Get Approved" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="process-number">2</div>
                <h2 className="text-3xl font-bold mb-4">Get Approved</h2>
                <p className="text-lg mb-4">
                  Our team will review your application and vehicle information. Approval is based on your vehicle's value, not your credit score.
                </p>
                <p className="text-lg mb-4">
                  We'll verify your vehicle's title and conduct a quick inspection to determine its value.
                </p>
                <p className="text-lg mb-6">
                  Required documents include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Valid government-issued photo ID</li>
                  <li>Clear vehicle title in your name</li>
                  <li>Proof of residence</li>
                  <li>Proof of income</li>
                  <li>Proof of vehicle insurance</li>
                  <li>Vehicle registration</li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="process-number">3</div>
                <h2 className="text-3xl font-bold mb-4">Get Your Cash</h2>
                <p className="text-lg mb-4">
                  Once approved, you'll receive your funds quickly, often on the same day you apply. We offer multiple payment options for your convenience.
                </p>
                <p className="text-lg mb-4">
                  You keep driving your vehicle while repaying your loan. We only hold the title as collateral.
                </p>
                <p className="text-lg mb-6">
                  Repayment terms are flexible, and our team is always available to answer any questions you may have.
                </p>
                <Link href="/apply-now" className="btn-primary">
                  Get Started Today
                </Link>
              </div>
              <div className="order-1 md:order-2 relative h-64 md:h-80">
                <Image 
                  src="/images/process/step3-cash.jpg" 
                  alt="Get Your Cash" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">How much can I borrow?</h3>
              <p className="text-gray-700">
                Loan amounts are based on your vehicle's value. Generally, you can borrow up to 30% of your vehicle's market value.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Do I need good credit?</h3>
              <p className="text-gray-700">
                No, your loan approval is based on your vehicle's value, not your credit score. We welcome all credit types.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">How long does the process take?</h3>
              <p className="text-gray-700">
                The entire process can be completed in as little as 30 minutes, and you can receive your funds the same day.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Can I keep driving my car?</h3>
              <p className="text-gray-700">
                Yes! You keep possession of your vehicle while repaying your loan. We only hold the title as collateral.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">What vehicles do you accept?</h3>
              <p className="text-gray-700">
                We accept cars, trucks, SUVs, and motorcycles with clear titles. The vehicle must be in your name and in good working condition.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">What are the repayment terms?</h3>
              <p className="text-gray-700">
                Repayment terms vary based on your loan amount and state regulations. Our team will explain all terms clearly before you sign.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Apply now to see how much you can qualify for with your vehicle title. The process is quick, easy, and you'll get an instant decision.
          </p>
          <Link href="/apply-now" className="btn-primary text-lg px-8 py-3">
            Apply Now
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
