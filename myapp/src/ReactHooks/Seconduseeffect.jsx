import { useEffect, useState } from "react";
import React from "react";

function Seconduseeffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("use effect called once");
  }, []);

  useEffect(() => {
    console.log("use effect called on count change");
  }, [count]);

  useEffect(() => {
    console.log("use effect called on everytime");
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []); // Runs once after the first render

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running interval...");
    }, 1000);

    return () => {
      console.log("Cleanup runs", interval);
      clearInterval(interval); // Cleanup when component unmounts or count change
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{age}</h1>
      <button style={{ marginLeft: "45%" }} onClick={() => setCount(count + 1)}>
        Click Change Count
      </button>
      <br />
      <br />
      <button style={{ marginLeft: "45%" }} onClick={() => setAge(age + 1)}>
        {" "}
        Click Change Age
      </button>

      <div>
        {users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default Seconduseeffect;
