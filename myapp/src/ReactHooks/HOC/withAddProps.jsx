import React from "react";

function withAddProps(WrappedComponent) {
  return function NewComponent(props) {
    const addProp = "Additional Props";
    return (
      <div>
        <WrappedComponent {...props} addtionalProp={addProp} />
      </div>
    );
  };
}

export default withAddProps;
