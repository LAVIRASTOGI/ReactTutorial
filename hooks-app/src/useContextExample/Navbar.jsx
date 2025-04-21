import React, { useContext } from "react";
import { AuthContext } from "./AuthenticationContext";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { login, logout } = useContext(AuthContext);

  return (
    <>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Navbar;
