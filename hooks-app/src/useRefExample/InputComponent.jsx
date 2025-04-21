import React from "react";

//react 18
const InputComponent = React.forwardRef((props, ref) => {
  return <input type="text" placeholder="Enter Name" ref={ref} />;
});
export default InputComponent;

//raect 19
// const InputComponent = ({ ref }) => {
//   return <input type="text" placeholder="Enter Name" ref={ref} />;
// };
// export default InputComponent;
