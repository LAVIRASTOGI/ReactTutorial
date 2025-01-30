import React, { useState } from "react";

function FirstUseState() {
  let [age, setAge] = useState(30);
  const [obj, setObj] = useState({ name: "lavi", age: 30 });
  const [arr, setArr] = useState([1, 2, 3, 4]);

  const clickHandler = () => {
    setAge(age + 1);
    //
    // setObj((obj.name = "labi"));
    // setObj({ ...obj, age: age + 1, name: "lllll" });
    // let newArr = [1, ...arr];
    //converted your arr to a number - setstate will return a newvalue
    // setArr(arr.push(1, 2, 6));
    // arr.push(1, 2, 6);
    //
    // setArr(arr.push(1, 2, 6));
    // setObj({ ...obj, age: age + 1, name: "lllll" });
    //
    // not rerender
    // setAge(30);
    //batching
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 2);
    //batching
    // setAge((prev) => prev + 1);
    // setAge((prev) => prev + 1);
    // setAge((prev) => prev + 1);
    // setAge((prev) => prev + 1);
  };
  return (
    <>
      <h1>{age}</h1>
      <h2>{arr}</h2>
      <button onClick={() => clickHandler()}> Click</button>
    </>
  );
}

export default FirstUseState;
