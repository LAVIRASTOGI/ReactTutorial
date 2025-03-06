import React from "react";

export const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" placeholder="enter Name" ref={ref} />
    </>
  );
});
