import React from "react";
import { Link } from "react-router-dom";

function LandingPage({ isLoggedIn }) {
  return (
    <div>
      <section className="landing-hero">
        <h1>Welcome to User Portal</h1>
        <p>
          A modern application for managing user profiles and information.
          Explore our user database with easy navigation and search
          functionality.
        </p>

        <div className="action-buttons">
          {isLoggedIn ? (
            <Link to="/users">
              <button>Browse Users</button>
            </Link>
          ) : (
            <Link to="/login">
              <button>Get Started</button>
            </Link>
          )}
        </div>
      </section>

      <div className="card">
        <h2>About the Portal</h2>
        <p>
          This user portal application demonstrates modern React router
          implementation with protected routes, user authentication, and
          responsive design. Browse through user profiles, search for specific
          users, and explore the application features.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
