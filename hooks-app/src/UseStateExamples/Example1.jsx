import { useState } from "react";

function Example1() {
  const [user, setUser] = useState({ name: "lavi", age: 29 });
  const [counter, setCounter] = useState(0);

  const changeHandler = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  //rerender -2
  const incrementHandler = () => {
    // setCounter(counter + 1);
    // //batching....
    // setCounter(counter + 1); //0+1
    // setCounter(counter + 1);
    // setCounter(counter + 1); //1
    setCounter((prev) => prev + 1); //0+1=1
    setCounter((prev) => prev + 1); //1+1=2
    setCounter((prev) => prev + 1); //2+1=3
    setCounter((prev) => prev + 1); //3+1=4
    // setUser("yashu rastogi");
    //batch all of the set inside toghter and rerender react once

    // setTimeout(() => {
    //   setCounter((prev) => prev + 1);
    //   setUser("ss");
    // }, 1000);

    // //set............
    // //batching......
    // setCounter(counter + 1);
    // setUser({ ...user, name: "yashu" });
    // // user.name = "yashu";
    // // setUser({ ...user, name: "yashu" });
    // setCounter(8);
  };
  return (
    <>
      <h1>Welcome :{user?.name}</h1>
      <h1>Counter:{counter}</h1>
      <input type="text" placeholder="Enter Name" onChange={changeHandler} />
      <br />
      <br />
      <br />
      <button onClick={incrementHandler}>Increment</button>
    </>
  );
}

export default Example1;
