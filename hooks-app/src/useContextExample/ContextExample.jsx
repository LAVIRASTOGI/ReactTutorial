import React, { useContext } from "react";
import { AuthContext } from "./AuthenticationContext";
import { ThemeContext } from "./ThemeContext";

function ContextExample() {
  const { user } = useContext(AuthContext);
  // const { theme } = useContext(ThemeContext);

  return (
    <div >
      <h1>welcome :{user}</h1>
    </div>
  );
}

export default ContextExample;
