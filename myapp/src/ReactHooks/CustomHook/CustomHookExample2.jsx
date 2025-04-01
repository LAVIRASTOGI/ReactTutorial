import React from "react";
import useCounter from "./useCounter";

function CustomHookExample2() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>counter2:{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default CustomHookExample2;
