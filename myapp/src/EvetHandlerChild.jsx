import React from "react";

function EvetHandlerChild({ clickHandler }) {
  const clickHandlerChild = (event) => {
    clickHandler(event, true, "lavisss");
  };

  return <button onClick={clickHandlerChild}>Submit</button>;
}

export default EvetHandlerChild;
