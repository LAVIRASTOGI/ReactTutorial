import React, { useState } from "react";
import AgeComponent from "./AgeComponent";

export default function App() {
  let [age, setAge] = useState(30);
  const [obj, setObj] = useState({ name: "lavi", age: 30 });
  const [arr, setArr] = useState([1, 2, 3, 4]);

  const clickHandler = () => {
    // setAge(age + 1);
    // setObj((obj.name = "labi"));
    // setObj({ ...obj, age: age + 1, name: "lllll" });
    // let newArr = [1, ...arr];
    // setArr(arr.push(1, 2, 6));
    // arr.push(1, 2, 6);
    // setAge(30);
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 2);
    // setAge((prev) => prev + 1);
    // setAge((prev) => prev + 1);
    // setAge((prev) => prev + 1);
    setAge((prev) => prev + 1);
    setArr(arr.push(1, 2, 6));
    setObj({ ...obj, age: age + 1, name: "lllll" });
  };
  return (
    <div>
      <AgeComponent age={age} obj={obj} clickHandler={clickHandler} />
      <h1>{age}</h1>
      {/* <h2>{arr}</h2> */}
      <button onClick={clickHandler}> Click</button>
    </div>
  );
}
