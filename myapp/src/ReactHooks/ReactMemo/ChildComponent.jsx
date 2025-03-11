import React from "react";

// react memo doest shallow comparsion and chaeck prev and next props are same

//here function if we dont use usecallback a new reference is passes
// object same value but reference is different and it does shallow copy
// create
const ChildComponent = React.memo(
  ({ title, user, updateUser }) => {
    console.log("ChildComponent rendered");
    return (
      <div>
        <h1>{title}</h1>
        <h1>Hello {user?.name}</h1>
        <button onClick={updateUser}>Update User</button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.user.name === nextProps.user.name) {
      return true;
    }
    return false;
  }
);
export default ChildComponent;
