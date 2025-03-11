import React, { use, useReducer, useState } from "react";
import UsersDatamemoize from "./UsersDatamemoize";

const initialState = {
  user: "",
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isAuth: true, user: action.payload };
    case "logout":
      return { ...state, isAuth: false, user: "" };
    default:
      return state;
  }
};

function UseRreducerautrhExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const login = () => {
    dispatch({
      type: "login",
      payload: "lavi",
    });
  };
  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  return (
    <>
      {state?.isAuth && <h1>welcome user : {state?.user}</h1>}
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default UseRreducerautrhExample;
