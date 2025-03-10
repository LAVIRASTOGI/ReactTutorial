import { useState } from "react";
import React from "react";

export const MyContext = React.createContext();

const Example1Provider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
};

export default Example1Provider;
