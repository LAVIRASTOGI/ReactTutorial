import React, { useEffect, useRef } from "react";
import { Input } from "./Input";

function FowardRefexample() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>foward Ref Example</div>
      <Input ref={inputRef} />
      <button onClick={() => console.log(inputRef?.current?.value)}>
        Check Val
      </button>
    </>
  );
}

export default FowardRefexample;
