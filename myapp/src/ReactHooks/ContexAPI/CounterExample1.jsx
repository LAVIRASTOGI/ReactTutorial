import React, { useContext } from "react";
import { MyContext } from "./Example1";
import { useThemeContext } from "./ThemeContext";
import { useAuthContext } from "../AuthenticationContext";

function CounterExample1() {
  const { count, increment } = useContext(MyContext);
  const { theme, toggleTheme } = useThemeContext();
  const { user, login, logout } = useAuthContext();
  return (
    <div className={theme === "light" ? "" : "dark"}>
      <h1>Count: {count}</h1>
      <h1>Theme: {theme}</h1>
      {user && <h1>User :{user}</h1>}
      <button onClick={increment}>Increment</button>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => login("Lavi Rastogi")}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default CounterExample1;
