import React, { useContext } from "react";
import { useAuthContext2 } from "./AuthenticationContext";
// import { AuthContext } from "./AuthenticationContext";

function LoginComponent() {
  const { login, logout } = useAuthContext2();
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
