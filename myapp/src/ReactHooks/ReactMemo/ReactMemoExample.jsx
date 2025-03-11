import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ReactMemoExample() {
  console.log("ParentComponent rendered");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "lavi",
    age: 30,
  });

  const updateUser = useCallback(() => setUser({ name: "lavi", age: 30 }), []);
  return (
    <>
      <h1>Count - {count}</h1>
      <ChildComponent
        user={user}
        updateUser={updateUser}
        title="FrontEnddevloper"
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default ReactMemoExample;
