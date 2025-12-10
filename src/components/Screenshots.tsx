import React from 'react';
import '../styles/Screenshots.scss';
import browseListings from '../assets/browselistings.png';
import liveBidding from '../assets/livebidding.png';
import profile from '../assets/profile.png';

interface Screenshot {
  title: string;
  image: string;
  description: string;
}

const Screenshots: React.FC = () => {
  const screenshots: Screenshot[] = [
    {
      title: "Browse Listings",
      image: browseListings,
      description: "Discover items and live auctions near you."
    },
    {
      title: "Live Bidding",
      image: liveBidding,
      description: "Place bids in real-time and win your price."
    },
    {
      title: "Manage Profile",
      image: profile,
      description: "Track your bids, listings, and scheduled meetings."
    }
  ];

  return (
    <section id="screenshots" className="categories-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            App <span className="highlight">Preview</span>
          </h2>
          <p className="section-description">
            Take a look inside
          </p>
        </div>
        
        <div className="row g-4 categories-grid justify-content-center">
          {screenshots.map((screenshot, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div 
                className="category-card screenshot-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="screenshot-wrapper">
                  <img src={screenshot.image} alt={screenshot.title} className="category-image screenshot-image" />
                </div>
                <div className="screenshot-info">
                  <h3 className="category-title">{screenshot.title}</h3>
                  <p className="category-items">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;