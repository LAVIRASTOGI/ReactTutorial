import React from "react";
import useCounter from "./useCounter";
import useWindowResize from "./useWindowResize";
import useFetch from "./useFetch";
import Navbar from "./Navbar";

function CustomHookExample() {
  const { count, increment, decrement, reset } = useCounter();
  const { width, height } = useWindowResize();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ textAlign: "center", listStyle: "none" }}>
      <Navbar />
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <hr />
      <div>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        {width < 768 ? <p>Mobile View</p> : <p>Desktop View</p>}
      </div>

      <hr />

      <h1>List of user</h1>
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}

export default CustomHookExample;
