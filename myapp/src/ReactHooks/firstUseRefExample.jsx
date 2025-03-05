import { useRef, useState } from "react";
import React from "react";

export default function FirstUseRefExample() {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const [age, setAge] = useState(30);

  const clickHandler = () => {
    console.log(ref);
    console.log(headingRef);
    ref.current.focus();
  };

  const checkHandler = () => {
    console.log("inputvalue", ref.current.value);
  };

  return (
    <>
      <div ref={headingRef}>firstUseRefExample</div>
      <h1 id="age2" ref={headingRef}>
        {age}
      </h1>
      <h2 id="age2" ref={headingRef}>
        {age}
      </h2>
      <input type="text" ref={ref} />
      <button onClick={clickHandler}>Focus</button>
      <button onClick={checkHandler}>Check Value</button>
    </>
  );
}
