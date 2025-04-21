import React, { useRef } from "react";

function RefExample4Otp() {
  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    const currentValue = e.target.value;
    if (currentValue && index < 3) {
      console.log(inputRef);
      inputRef?.current[index + 1]?.focus();
    }
  };
  return (
    <>
      {new Array(4).fill(0).map((ele, index) => (
        <input
          type="number"
          placeholder="Enter PIN"
          ref={(ele) => (inputRef.current[index] = ele)}
          key={index}
          id={index}
          onChange={(e) => changeHandler(e, index)}
        />
      ))}
    </>
  );
}

export default RefExample4Otp;
