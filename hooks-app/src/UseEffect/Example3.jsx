import React, { useEffect, useState } from "react";

function Example3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      //   setCount((prev) => prev + 1);
      console.log("runn");
    }, 2000);

    //it runs on every dependency change
    return () => {
      console.log(id);
      clearInterval(id);
    };
  }, [count]);
  return (
    <>
      <div>Counter:{count}</div>
      {/* <button onClick={() => setCount(0)}>Reset</button> */}
      <button onClick={() => setCount(count + 10)}>
        Stop and change count
      </button>
    </>
  );
}

export default Example3;
