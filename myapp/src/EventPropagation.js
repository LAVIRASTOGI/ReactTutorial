import React from "react";

function EventPropagation() {
  const clickHandler1 = () => {
    console.log("clicked clickHandler1");
  };
  const clickHandler2 = (event) => {
    event.stopPropagation();
    console.log("clicked clickHandler2");
  };
  return (
    <>
      <div onClick={clickHandler1}>
        <button onClick={clickHandler2}>click</button>
      </div>
    </>
  );
}

export default EventPropagation;
