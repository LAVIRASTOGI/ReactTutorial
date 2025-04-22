import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Users from "./Users";
import UserDetails from "./UserDeatails";
import NotFound from "./NotFound";
import NavBar from "./NavBar";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./Search";

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
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
            <Route path="login" element={<Login onLogin={handleLogin} />} />

            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UserDetails />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="search" element={<Search />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
