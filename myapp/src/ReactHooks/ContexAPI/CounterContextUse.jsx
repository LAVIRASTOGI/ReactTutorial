import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { AuthContext } from "./AuthenticationContext";

function CounterContextUse() {
  const { count, increment, decrement } = useContext(CounterContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      <h1>Count:{count}</h1>
      <h2>user:{user}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default CounterContextUse;
