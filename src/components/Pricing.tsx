import React from 'react';
import { Smartphone, Globe, Users, Crown, Shield, Palette, ArrowRight, Check } from 'lucide-react';
import '../styles/Pricing.scss';

const Pricing: React.FC = () => {
  const packageIncludes = [
    "Fully customized website with your branding",
    "Native iOS & Android mobile applications",
    "Your logo, colors & brand identity",
    "Admin, Premium & Regular user access",
    "Complete admin control panel",
    "Live bidding & auction system",
    "In-app chat & meeting scheduler",
    "User management & analytics"
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header text-center">
          <h2 className="pricing-main-title">
            Want Your Own <span className="highlight">Branded Platform?</span>
          </h2>
          <p className="pricing-subtitle">
            Get a complete turnkey auction marketplace solution customized for your business
          </p>
        </div>

        <div className="pricing-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="pricing-info">
                <div className="info-badge">
                  <Crown size={18} />
                  <span>White-Label Solution</span>
                </div>
                
                <h3 className="pricing-title">Complete Platform Package</h3>
                <p className="pricing-description">
                  Launch your own auction marketplace with a fully customized website and mobile apps. 
                  Perfect for businesses, real estate agencies, and entrepreneurs looking to create their own bidding platform.
                </p>

                <div className="key-features">
                  <div className="key-feature">
                    <div className="feature-icon-box">
                      <Globe size={22} />
                    </div>
                    <div>
                      <h4>Custom Website</h4>
                      <p>Fully responsive with your brand identity</p>
                    </div>
                  </div>
                  <div className="key-feature">
                    <div className="feature-icon-box">
                      <Smartphone size={22} />
                    </div>
                    <div>
                      <h4>Mobile Apps</h4>
                      <p>iOS & Android apps with full functionality</p>
                    </div>
                  </div>
                  <div className="key-feature">
                    <div className="feature-icon-box">
                      <Users size={22} />
                    </div>
                    <div>
                      <h4>3-Tier User System</h4>
                      <p>Admin, Premium & Regular user access</p>
                    </div>
                  </div>
                </div>

                <div className="package-includes">
                  <h4 className="includes-title">What You Get:</h4>
                  <div className="includes-grid">
                    {packageIncludes.map((item, idx) => (
                      <div key={idx} className="include-item">
                        <Check size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="pricing-box">
                <div className="pricing-tag">One-Time Payment</div>
                <div className="pricing-amount">
                  <span className="currency">₹</span>
                  <span className="price">25,000</span>
                </div>
                <p className="pricing-note">Complete ownership • No recurring fees</p>
                
                <div className="pricing-highlights">
                  <div className="highlight-item">
                    <Palette size={18} />
                    <span>Full Customization</span>
                  </div>
                  <div className="highlight-item">
                    <Shield size={18} />
                    <span>Admin Dashboard</span>
                  </div>
                  <div className="highlight-item">
                    <Crown size={18} />
                    <span>White-Label Rights</span>
                  </div>
                </div>

                <button className="btn-pricing">
                  <span>Get Your Platform Now</span>
                  <ArrowRight size={20} />
                </button>
                
                <p className="pricing-footer-note">Perfect for businesses ready to launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;