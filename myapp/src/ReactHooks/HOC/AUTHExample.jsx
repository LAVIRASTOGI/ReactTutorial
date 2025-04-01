import React from "react";

function AUTHExample({ user }) {
  return (
    <div>
      AUTHExample
      <h1>{user?.name}</h1>
    </div>
  );
}

export default AUTHExample;
