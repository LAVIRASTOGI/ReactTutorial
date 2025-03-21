import React, { useContext } from "react";
import { AuthContext } from "./AuthenticationContext";

function LoginComponent() {
  const { login, logout } = useContext(AuthContext);
  const loginHandler = () => {
    // api
    //user name=>lavi
    login("lavi");
  };

  return (
    <>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default LoginComponent;
