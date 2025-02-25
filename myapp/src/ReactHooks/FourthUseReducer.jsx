import { useReducer } from "react";
import React from "react";

const initialState = {
  count: 0,
  name: "John",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "changeName":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
function FourthUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <h2>{state.name}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "changeName", payload: "Jane" })}>
        Change Name
      </button>
    </div>
  );
}

export default FourthUseReducer;
