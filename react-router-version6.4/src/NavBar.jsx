import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown after navigating
  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header>
      <h1>
        <Link to="/">Portal</Link>
      </h1>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        {/* Products dropdown with nested routes */}
        <div className="dropdown" ref={dropdownRef}>
          <NavLink
            to="/products"
            className={dropdownOpen ? "dropdown-active" : ""}
            onClick={(e) => {
              // If clicking directly on the Products link, prevent navigation
              // and toggle the dropdown instead
              if (e.target === e.currentTarget) {
                e.preventDefault();
                setDropdownOpen(!dropdownOpen);
              }
            }}
          >
            Products
          </NavLink>
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <NavLink to="/products/featured" onClick={handleDropdownItemClick}>
              Featured
            </NavLink>
            <NavLink to="/products/new" onClick={handleDropdownItemClick}>
              New Arrivals
            </NavLink>
            <NavLink
              to="/products/discounted"
              onClick={handleDropdownItemClick}
            >
              On Sale
            </NavLink>
          </div>
        </div>
        {/* Query Parameters Example - accessible to all users */}
        <NavLink to="/search-params">Query Params</NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/search">Search</NavLink>
          </>
        )}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
