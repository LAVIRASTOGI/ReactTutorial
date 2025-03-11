import React from "react";
import withAddProps from "./withAddProps";

function HOCexample({ message, addtionalProp }) {
  return (
    <>
      <h1>{message}</h1>
      <h1>here -------{addtionalProp}</h1>
    </>
  );
}

export default withAddProps(HOCexample);
