import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get Cash Fast with Your Car Title</h1>
            <p>Express Title offers quick and easy auto title loans with competitive rates. Get approved in minutes and keep driving your car.</p>
            <div className="hero-buttons">
              <Link href="/apply-now" className="btn-primary">Apply Now</Link>
              <Link href="/how-it-works" className="btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image 
              src="/images/hero-image.png" 
              alt="Car with cash" 
              width={500} 
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Express Title?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Fast Approval</h3>
              <p>Get approved in as little as 30 minutes and receive cash the same day.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>Keep Your Car</h3>
              <p>Continue driving your vehicle while repaying your loan.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Simple Requirements</h3>
              <p>Just need your car, clear title, ID, and proof of income.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Competitive Rates</h3>
              <p>We offer some of the best rates in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-overview">
        <div className="container">
          <h2>How It Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-image">
                <Image 
                  src="/images/process/step1-signing.png" 
                  alt="Apply Online or In-Person" 
                  width={300} 
                  height={200}
                />
              </div>
              <h3>Apply Online or In-Person</h3>
              <p>Fill out our simple application online or visit one of our convenient locations.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-image">
                <Image 
                  src="/images/process/step2-inspection.png" 
                  alt="Get Approved" 
                  width={300} 
                  height={200}
                />
              </div>
              <h3>Get Approved</h3>
              <p>Our team will verify your information and inspect your vehicle to determine your loan amount.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-image">
                <Image 
                  src="/images/process/step3-smiling.png" 
                  alt="Get Your Cash" 
                  width={300} 
                  height={200}
                />
              </div>
              <h3>Get Your Cash</h3>
              <p>Once approved, receive your cash immediately and drive away in your car.</p>
            </div>
          </div>
          <div className="process-cta">
            <Link href="/how-it-works" className="btn-secondary">Learn More About Our Process</Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"I needed cash quickly for an emergency and Express Title came through for me. The process was fast and the staff was very helpful."</p>
              </div>
              <div className="testimonial-author">
                <p><strong>Sarah J.</strong> - Dallas, TX</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"I was approved in less than an hour and had the money I needed the same day. I would definitely recommend Express Title to anyone in need of quick cash."</p>
              </div>
              <div className="testimonial-author">
                <p><strong>Michael T.</strong> - Houston, TX</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"The team at Express Title made the process so easy. They explained everything clearly and I was able to get the loan I needed without any hassle."</p>
              </div>
              <div className="testimonial-author">
                <p><strong>Lisa R.</strong> - Austin, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Apply now and get the cash you need today!</p>
          <Link href="/apply-now" className="btn-primary">Apply Now</Link>
        </div>
      </section>
    </main>
  );
}
