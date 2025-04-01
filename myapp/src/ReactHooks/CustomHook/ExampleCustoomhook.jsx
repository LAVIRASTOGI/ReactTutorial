import React from "react";
import useFetch2 from "./useFetch2";

function ExampleCustoomhook() {
  const { data, error, loading } = useFetch2(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(data);
  return (
    <>
      {loading && <h1>Loading......</h1>}
      {data &&
        data?.length > 0 &&
        data
          .slice(0, 10)
          .map((ele, index) => <h1 key={index + ele.title}> {ele.title}</h1>)}
    </>
  );
}

export default ExampleCustoomhook;
