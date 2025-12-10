import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import '../styles/CTA.scss';

const CTA: React.FC = () => {
  return (
    <section id="download" className="cta-section">
      <div className="container">
        <div className="cta-content text-center">
          <h2 className="cta-title">Ready to Start Bidding?</h2>
          <p className="cta-description">
            Join thousands of users buying and selling with confidence
          </p>
          <div className="cta-buttons d-flex justify-content-center flex-wrap gap-3">
            <button className="btn-cta-primary">
              <Download size={20} />
              <span>Download on App Store</span>
            </button>
            <button className="btn-cta-secondary">
              <span>Get it on Google Play</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;