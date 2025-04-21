import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function RefExample1() {
  //step-1
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, []);

  const SubmitHandler = () => {
    console.log(inputRef?.current?.value);
  };

  useEffect(() => {
    console.log("ss");
  });
  return (
    <>
      <label>Name</label>
      <br />
      {/* //step 2 */}
      <input type="text" placeholder="Enter Name" ref={inputRef} />
      <button onClick={SubmitHandler}>Submit Value</button>
    </>
  );
}

export default RefExample1;
