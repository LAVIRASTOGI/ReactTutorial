import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import "./App.css";

function AppLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const navigation = useNavigation();

  // Check login status whenever component renders
  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    // Check on mount
    checkLoginStatus();

    // Listen for storage events (when localStorage changes in other tabs)
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  if (navigation.state === "loading") {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Outlet />
    </>
  );
}

export default AppLayout;
