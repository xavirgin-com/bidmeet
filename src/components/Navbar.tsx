import React, { useState, useEffect } from 'react';
import { Gavel } from 'lucide-react';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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
          <a href="#categories" className="nav-link-custom">Screenshots</a>
          <a href="#download" className="btn-download">Download App</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;