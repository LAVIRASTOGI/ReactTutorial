import React from "react";

function About() {
  return (
    <div>
      <h1>About Us</h1>

      <div className="card">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a simple, intuitive platform for managing
          user information. We believe in creating tools that enhance
          productivity and make organization easy.
        </p>
      </div>

      <div className="card">
        <h2>Our Team</h2>
        <p>
          We are a small team of dedicated developers and designers who are
          passionate about creating high-quality web applications. Our diverse
          background in UI/UX, frontend, and backend development allows us to
          create comprehensive solutions for various needs.
        </p>
      </div>

      <div className="card">
        <h2>Technology Stack</h2>
        <p>
          This application is built using modern web technologies including:
        </p>
        <ul style={{ marginLeft: "2rem", marginTop: "1rem" }}>
          <li>React for the UI components</li>
          <li>React Router for navigation</li>
          <li>Modern CSS for styling</li>
          <li>Vite as the build tool</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
