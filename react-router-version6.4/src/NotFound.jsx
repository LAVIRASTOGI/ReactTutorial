import React from "react";
import { Link, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  console.error(error);

  // Determine error type and message
  let status = "404";
  let title = "Page Not Found";
  let message =
    "The page you are looking for does not exist or has been moved.";

  // Handle different error types
  if (error) {
    if (error.status === 404) {
      // 404 error (already handled by default)
    } else if (error.status === 500) {
      status = "500";
      title = "Server Error";
      message = "Something went wrong on our servers. Please try again later.";
    } else if (error.status) {
      // Other HTTP errors
      status = error.status;
      title = error.statusText || "Error";
      message = error.data?.message || "An unexpected error occurred.";
    } else if (error.message) {
      // JavaScript errors
      status = "Error";
      title = "Application Error";
      message = error.message;
    }
  }

  return (
    <div className="not-found">
      <h1>{status}</h1>
      <h2>{title}</h2>
      <p>{message}</p>
      {error && error.stack && (
        <div className="error-details">
          <pre>{error.stack}</pre>
        </div>
      )}
      <Link to="/">
        <button>Go to Homepage</button>
      </Link>
    </div>
  );
}

export default NotFound;
