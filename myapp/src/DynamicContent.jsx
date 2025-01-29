import React from "react";

function DynamicContent() {
  let users = ["lavi", "yashu", "dilip", "chhavi"];
  const generateId = () => Date.now() + Math.random();
  return (
    <div>
      {users?.map((ele) => (
        <h1 key={generateId()}>{ele}</h1>
      ))}
    </div>
  );
}

export default DynamicContent;
