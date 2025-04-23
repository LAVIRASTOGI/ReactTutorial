import { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle function to switch between dark and light mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Value to be provided to consumers
  const value = {
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
