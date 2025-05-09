import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About ReactQuery Demo</h1>
        <p className="about-subtitle">
          Learn more about our project and the technology behind it
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            This demo application showcases the power and simplicity of TanStack
            Query (formerly React Query), a data-fetching and state management
            library for React applications. Our goal is to demonstrate how
            TanStack Query simplifies the process of fetching, caching, and
            updating data in React applications.
          </p>
        </div>

        <div className="about-section">
          <h2>What is TanStack Query?</h2>
          <p>
            TanStack Query is a powerful library that provides hooks for
            fetching, caching, and updating asynchronous data in React
            applications. It handles all the complex aspects of data fetching,
            including caching, background updates, and stale data management.
          </p>
          <p>Key benefits of TanStack Query include:</p>
          <ul className="about-list">
            <li>Automatic caching and refetching of data</li>
            <li>Background updates without affecting user experience</li>
            <li>Pagination and infinite scrolling support</li>
            <li>Optimistic updates for a smoother user experience</li>
            <li>Automatic garbage collection of unused data</li>
            <li>Dedicated DevTools for debugging and monitoring</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <h3>React</h3>
              <p>A JavaScript library for building user interfaces</p>
            </div>
            <div className="tech-item">
              <h3>TanStack Query</h3>
              <p>Data fetching and state management library</p>
            </div>
            <div className="tech-item">
              <h3>React Router</h3>
              <p>Declarative routing for React applications</p>
            </div>
            <div className="tech-item">
              <h3>Vite</h3>
              <p>Next-generation frontend tooling</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👩‍💻</div>
            <h3>Lavi Rastogi</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
