import React from "react";
import { Link } from "react-router-dom";

function NotFound({ error }) {
  console.log(error);
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/">
        <button>Go to Homepage</button>
      </Link>
    </div>
  );
}

export default NotFound;
