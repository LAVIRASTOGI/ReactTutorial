import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ReactQuery Demo</h1>
          <p className="hero-subtitle">
            A powerful data fetching and caching library for React applications
          </p>
          <div className="hero-buttons">
            <Link to="/posts" className="btn btn-primary">
              Explore Posts
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast & Responsive</h3>
            <p>
              Lightning-fast data fetching with automatic caching and background updates.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Auto Refetching</h3>
            <p>
              Keeps your data fresh with smart background refetching strategies.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Parallel Queries</h3>
            <p>
              Fetch multiple data sources simultaneously for optimal performance.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Error Handling</h3>
            <p>
              Built-in error handling and retry logic for robust applications.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>
            Explore our collection of posts powered by React Query's efficient data fetching.
          </p>
          <Link to="/posts" className="btn btn-primary">
            View Posts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;