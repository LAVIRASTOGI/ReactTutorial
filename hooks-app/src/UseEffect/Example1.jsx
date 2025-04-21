import React, { useEffect, useState } from "react";

function Example1() {
  const [age, setAge] = useState(32);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log("Called everytime");
    // setAge(age + 1);
  });

  useEffect(() => {
    console.log("Called once");
  }, []);

  useEffect(() => {
    console.log("Called counter changes");
  }, [counter]);

  useEffect(() => {
    console.log("Called counter changes3");
  }, [counter]);

  useEffect(() => {
    console.log("Called age changes");
  }, [age]);

  return (
    <>
      <h1>Counter:{counter}</h1>
      <h1>Age:{age}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br></br>
      <button onClick={() => setAge(age + counter + 1)}>AGE</button>
    </>
  );
}

export default Example1;
