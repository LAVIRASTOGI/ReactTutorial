import { useState, useEffect } from "react";

// Custom hook
export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data from localStorage or an API
    const fetchUser = () => {
      const token = localStorage.getItem("token");
      if (token) {
        // Fetch user details (e.g., from an API)
        setTimeout(() => {
          setUser({ name: "Lavi Rastogi", email: "lavi@example.com" });
          setLoading(false);
        }, 1000);
      } else {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser({ name: "Lavi Rastogi", email: "lavi@example.com" });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return { user, loading, login, logout };
}
