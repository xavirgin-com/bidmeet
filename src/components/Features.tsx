import React, { JSX } from 'react';
import { Gavel, Shield, MessageCircle, TrendingUp } from 'lucide-react';
import '../styles/Features.scss';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Gavel size={32} />,
      title: "Live Bidding",
      description: "Experience the thrill of real-time auctions. Bid on items you love and watch the competition unfold."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Meetings",
      description: "Meet sellers in safe locations. No anonymous deals, just verified users and secure transactions."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Direct Chat",
      description: "Negotiate directly with buyers and sellers. Schedule meetings and finalize deals with confidence."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Smart Pricing",
      description: "Get the best deals through competitive bidding. Market-driven prices ensure fairness."
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Why Choose <span className="highlight">BidMeet</span>?
          </h2>
          <p className="section-description">
            Everything you need for safe, exciting, and profitable buying and selling
          </p>
        </div>
        
        <div className="row g-4 features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="feature-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;