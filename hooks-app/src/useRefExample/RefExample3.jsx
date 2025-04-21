import React, { useEffect, useRef } from "react";
import InputComponent from "./InputComponent";

function RefExample3() {
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
      <InputComponent ref={inputRef} />
      <button onClick={SubmitHandler}>Submit Value</button>
    </>
  );
}

export default RefExample3;
