import React, { useCallback, useMemo, useRef, useState } from "react";

const users = [
  { id: 1, name: "lavi", age: 25 },
  { id: 2, name: "chhavi", age: 30 },
  { id: 3, name: "dilip", age: 35 },
  { id: 4, name: "yashu", age: 40 },
  { id: 5, name: "lavi2", age: 45 },
];

function UsersDatamemoize() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  //   memomize a function and return a value
  //recompute when query changes
  const searchUser = useMemo(() => {
    console.log("searchUser called");
    if (query === "" || !query) {
      return [];
    }
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(query.toLowerCase());
    });
    return filteredUsers;
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <hr />

      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={handleChange}
      />
      {searchUser.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
        </div>
      ))}
    </>
  );
}

export default UsersDatamemoize;
