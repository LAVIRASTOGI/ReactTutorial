import { Route, Routes, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Users from "./Users";
import UserDetails from "./UserDeatails";
import NotFound from "./NotFound";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./Search";
import Layout from "./Layout";
import NavBar from "./NavBar";

// Import the new product components
import Products from "./Products";
import ProductIndex from "./ProductIndex";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
import DiscountedProducts from "./DiscountedProducts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("user", "user123");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* Public routes that don't require the protected route wrapper */}
        <Route path="login" element={<Login onLogin={handleLogin} />} />

        {/* Routes using the common layout */}
        {/* <Route
        element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      > */}
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />

        {/* Products routes with nested structure */}
        <Route path="products" element={<Products />}>
          {/* Index route - shown when parent path matches exactly */}
          <Route index element={<ProductIndex />} />
          {/* Child routes */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="discounted" element={<DiscountedProducts />} />
        </Route>

        {/* Protected routes */}
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
