import React, { useState } from "react";
const ThemeContext = React.createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return { theme, toggleTheme };
};

export default ThemeContextProvider;
