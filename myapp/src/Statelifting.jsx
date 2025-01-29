import React, { useState } from "react";

function Statelifting() {
  const [name, setName] = useState("lavi");
  return (
    <>
      <ChildCompoments1 name={name} setName={setName} />
      <ChildCompoments2 name={name} setName={setName} />
    </>
  );
}

function ChildCompoments1({ name, setName }) {
  return (
    <div>
      <h1 onClick={() => setName("yashu")}>Child Component1 ,{name}</h1>
    </div>
  );
}

function ChildCompoments2({ name, setName }) {
  return (
    <div>
      <h1 onClick={() => setName("yashu")}>Child Component2 ,{name}</h1>
    </div>
  );
}
export default Statelifting;
