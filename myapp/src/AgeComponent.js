import { forwardRef, use, useState } from "react";
import { useEffect } from "react";

const AgeComponent = forwardRef(({ name }, ref) => {
  //iniatal - 34
  // const [age1, setAge1] = useState(Number(props.age));

  // useEffect(() => {
  //   setAge1(Number(props.age));
  // }, [props.age]);

  return (
    <div>
      <h1>helllo - {name}</h1>
      <input type="text" placeholder="enter Name" ref={ref} />
    </div>
  );
});

export default AgeComponent;
