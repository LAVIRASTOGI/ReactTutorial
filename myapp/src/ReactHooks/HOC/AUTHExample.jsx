import React from "react";
import withAuth from "./withAuth";

function AUTHExample({ user }) {
  return (
    <div>
      AUTHExample
      <h1>{user?.name}</h1>
    </div>
  );
}

export default withAuth(AUTHExample);
