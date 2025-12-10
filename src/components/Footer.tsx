import React from 'react';
import { Gavel, Mail, MapPin } from 'lucide-react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-content">
          <div className="col-lg-4 footer-brand">
            <div className="footer-logo">
              <Gavel size={32} />
              <span>BidMeet</span>
            </div>
            <p className="footer-tagline" >
              Your trusted platform for live bidding and secure transactions.
            </p>
            <div className="footer-contact" >
              <div className="contact-item">
                <MapPin size={18} />
                <span>Kerala, India</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>hello@bidmeet.com</span>
              </div>
            </div>
          </div>
          
       
        </div>
        
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
          <p>© 2025 BidMeet, Inc. All rights reserved.</p>
          <div className="social-links d-flex gap-3">
            <a href="#twitter" aria-label="Twitter">𝕏</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;