import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const user = localStorage.getItem("user");

  const Login = () => {
    localStorage.setItem("user", "lavi");
  };
  const Logout = () => {
    localStorage.clear();
  };

  return (
    <header>
      <h1>My Website</h1>
      {user && (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
      {user ? (
        <button onClick={Logout}>Logout</button>
      ) : (
        <button onClick={Login}>LogIn</button>
      )}
    </header>
  );
}

export default NavBar;
