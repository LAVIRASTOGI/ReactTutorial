import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path from location state, defaulting to "/users" if none exists
  const from = location.state?.from || "/users";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Simple validation - in a real app you would check credentials with a server
    if (email === "lavi@example.com" && password === "lavi") {
      onLogin();
      // Redirect to the page they were trying to visit before being sent to login
      navigate(from);
    } else {
      setError("Invalid credentials. Try lavi@example.com / lavi");
    }
  };

  return (
    <div className="login-form">
      <h2>Log In</h2>
      {from !== "/users" && (
        <div className="redirect-notice">
          You need to log in to access <strong>{from}</strong>
        </div>
      )}
      {error && <div className="alert alert-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
