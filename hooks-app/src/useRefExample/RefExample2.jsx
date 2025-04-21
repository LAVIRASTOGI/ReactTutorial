import React, { useRef, useState } from "react";

function RefExample2() {
  const [istoggle, setIstoggle] = useState(false);
  const divRef = useRef(null);

  const clickHandler = () => {
    console.log(divRef?.current);
    setIstoggle(!istoggle);
  };

  return (
    <>
      <button onClick={clickHandler}> {istoggle ? "Close" : "Open"}</button>
      {/* {istoggle && (
        <div>
          <h1>Open this Div</h1>
        </div>
      )} */}
      <div
        ref={divRef}
        style={{
          overflow: "hidden",
          transition: "all 0.5s ease-in-out",
          height: istoggle ? divRef?.current?.scrollHeight + "px" : 0 + "px",
        }}
      >
        <h1>Open this Div</h1>
        <h1>Open this Div</h1>
        <h1>Open this Div</h1>
      </div>
    </>
  );
}

export default RefExample2;
