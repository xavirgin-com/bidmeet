import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import '../styles/Hero.scss';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-image"></div>
      <div className="container">
        <div className="row align-items-center hero-content">
          <div className="col-lg-6 hero-text fade-in-up">
            <div className="badge-pill">
              <Sparkles size={16} />
              <span>Live Auctions Now</span>
            </div>
            
            <h1 className="hero-title">
              Discover, Bid,<br />
              <span className="highlight">Meet & Deal</span>
            </h1>
            
            <p className="hero-description">
              The ultimate auction experience. Buy and sell products, land, and property 
              through live bidding and secure, meeting-based transactions.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                <span>Download App</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          
          <div className="col-lg-6 hero-visual">
            {/* bg*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;