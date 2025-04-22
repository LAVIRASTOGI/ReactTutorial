import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, onLogout }) {
  return (
    <header>
      <h1>
        <Link to="/">User Portal</Link>
      </h1>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/search">Search</NavLink>
          </>
        )}
      </nav>

      {isLoggedIn ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </header>
  );
}

export default NavBar;
