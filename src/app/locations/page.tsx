import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Locations() {
  const locations = [
    {
      id: 1,
      name: 'Miami Office',
      address: '123 Biscayne Blvd, Miami, FL 33132',
      phone: '(305) 555-1234',
      hours: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266949!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1621436761244!5m2!1sen!2sus'
    },
    {
      id: 2,
      name: 'Orlando Office',
      address: '456 International Dr, Orlando, FL 32819',
      phone: '(407) 555-5678',
      hours: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112562.34588881368!2d-81.42996590759038!3d28.481168526229344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1621436823879!5m2!1sen!2sus'
    },
    {
      id: 3,
      name: 'Tampa Office',
      address: '789 Dale Mabry Hwy, Tampa, FL 33609',
      phone: '(813) 555-9012',
      hours: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112562.34588881368!2d-82.45826590759038!3d27.964168526229344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1621436823879!5m2!1sen!2sus'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 text-center">Our Locations</h1>
            <p className="text-lg mb-6 text-center max-w-2xl">
              Visit one of our convenient Florida locations for in-person assistance with your title loan application.
            </p>
          </div>
        </div>
      </section>
      
      {/* Locations List */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            {locations.map((location) => (
              <div key={location.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
                    <div className="mb-4">
                      <p className="text-gray-700 mb-1"><strong>Address:</strong></p>
                      <p className="text-gray-700">{location.address}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-700 mb-1"><strong>Phone:</strong></p>
                      <p className="text-gray-700">{location.phone}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-700 mb-1"><strong>Hours:</strong></p>
                      <p className="text-gray-700">{location.hours}</p>
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                        className="bg-primary-800 hover:bg-primary-900 text-white font-bold py-2 px-4 rounded-md inline-flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call
                      </a>
                      <a 
                        href={`sms:${location.phone.replace(/\D/g, '')}`}
                        className="bg-yellow-400 hover:bg-yellow-500 text-primary-900 font-bold py-2 px-4 rounded-md inline-flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3.293 3.293 3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                        Text
                      </a>
                    </div>
                  </div>
                  <div className="h-64 md:h-auto">
                    <iframe 
                      src={location.mapUrl} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title={`Map to ${location.name}`}
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Apply Online?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Can't make it to one of our locations? No problem! You can complete your entire application online and receive funds without leaving your home.
          </p>
          <Link href="/apply-now" className="btn-primary text-lg px-8 py-3">
            Apply Online Now
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
