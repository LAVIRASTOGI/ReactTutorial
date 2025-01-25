import { use, useState } from "react";
import { useEffect } from "react";

function AgeComponent({ age, obj, clickHandler }) {
  //iniatal - 34
  // const [age1, setAge1] = useState(Number(props.age));

  // useEffect(() => {
  //   setAge1(Number(props.age));
  // }, [props.age]);

  return (
    <div>
      {/* <p>My age is {age1}</p> */}
      {/* <p>My age is {props.age}</p> */}

      <h1>{age}</h1>
      <h1>{obj.name}</h1>
      <h1>{obj.age} </h1>
      <button onClick={clickHandler}> Click</button>
    </div>
  );
}
export default AgeComponent;
