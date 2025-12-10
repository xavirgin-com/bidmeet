import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <CTA />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;