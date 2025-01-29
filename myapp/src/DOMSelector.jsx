import React, { useState } from "react";

function DOMSelector() {
  const [count, setCount] = useState(0);
  const changeText = () => {
    let heading = document.getElementById("heading");
    heading.innerText = "DOMSelector";
    setCount(count + 1);
  };

  return (
    <>
      <h1 id="heading" onClick={changeText}>
        Recat Virtual DOM
      </h1>
      <h1 onClick={() => setCount(count + 2)}>Counter :{count}</h1>
    </>
  );
}

export default DOMSelector;
