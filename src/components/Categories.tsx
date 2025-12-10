import React from 'react';
import '../styles/Categories.scss';

interface Category {
  title: string;
  image: string;
  items: string;
  gradient: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      title: "Electronics & Gadgets",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
      items: "2,500+ Active Listings",
      gradient: "linear-gradient(135deg, rgba(255, 193, 7, 0.9), rgba(255, 152, 0, 0.9))"
    },
    {
      title: "Real Estate & Land",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      items: "850+ Properties",
      gradient: "linear-gradient(135deg, rgba(33, 150, 243, 0.9), rgba(3, 169, 244, 0.9))"
    },
    {
      title: "Vehicles & Auto",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
      items: "1,200+ Vehicles",
      gradient: "linear-gradient(135deg, rgba(156, 39, 176, 0.9), rgba(233, 30, 99, 0.9))"
    }
  ];

  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Browse by <span className="highlight">Category</span>
          </h2>
          <p className="section-description">
            Find exactly what you're looking for
          </p>
        </div>
        
        <div className="row g-4 categories-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div 
                className="category-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img src={category.image} alt={category.title} className="category-image" />
                <div className="category-overlay" style={{ background: category.gradient }}>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-items">{category.items}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
