import React from 'react';
import '../styles/HowItWorks.scss';

interface Step {
  number: string;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Browse & Discover",
      description: "Explore thousands of listings across multiple categories. Filter by location, price, and more."
    },
    {
      number: "02",
      title: "Bid with Confidence",
      description: "Place your bid in real-time auctions. Get instant notifications when you're outbid."
    },
    {
      number: "03",
      title: "Schedule Meeting",
      description: "Chat with the seller and arrange a safe meeting location. Both parties confirm the details."
    },
    {
      number: "04",
      title: "Complete Transaction",
      description: "Meet in person, inspect the item, and complete the purchase securely. Rate your experience."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            How It <span className="highlight">Works</span>
          </h2>
          <p className="section-description">
            Simple, secure, and straightforward
          </p>
        </div>
        
        <div className="row g-4 steps-container">
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="step-card" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;