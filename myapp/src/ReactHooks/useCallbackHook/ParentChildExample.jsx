import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click Me</button>;
});
function ParentChildExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so the function reference remains the same

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentChildExample;
