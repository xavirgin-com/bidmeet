import React, { useState, useEffect } from 'react';
import { Gavel, Menu, X } from 'lucide-react';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="navbar-brand-custom">
          <Gavel size={28} className="brand-icon" />
          <span className="brand-text">BidMeet</span>
        </a>
        
        <div className="nav-links">
          <a href="#features" className="nav-link-custom">Features</a>
          <a href="#how-it-works" className="nav-link-custom">How It Works</a>
          <a href="#screenshots" className="nav-link-custom">Screenshots</a>
          <a href="#download" className="btn-download">Download App</a>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
        <a href="#how-it-works" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
        <a href="#screenshots" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Screenshots</a>
        <a href="#download" className="btn-download-mobile" onClick={() => setMobileMenuOpen(false)}>Download App</a>
      </div>
    </nav>
  );
};

export default Navbar;