import { use, useState } from "react";
import { useEffect } from "react";

function AgeComponent(props) {
  console.log(props.age);
  //iniatal - 34
  const [age1, setAge1] = useState(Number(props.age));

  useEffect(() => {
    setAge1(Number(props.age));
  }, [props.age]);

  return (
    <div>
      <p>My age is {age1}</p>
    </div>
  );
}
export default AgeComponent;
