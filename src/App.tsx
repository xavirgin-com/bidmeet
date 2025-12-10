import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import CTA from './components/CTA';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;