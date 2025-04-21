import React, { useEffect, useState } from "react";

function Example2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => {
        setData(result?.users);
      });
  }, []);

  //   useEffect(() => {
  //     setData(["s"]);
  //   });
  return (
    <>
      <h1>k</h1>
      {data?.map((ele) => (
        <h1 key={ele?.id}> {ele?.firstName}</h1>
      ))}
    </>
  );
}

export default Example2;
