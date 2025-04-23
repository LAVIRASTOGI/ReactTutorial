import React, { useState, useCallback, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

// Button component that will re-render only when its props change
const Button = React.memo(({ onClick, children }) => {
  console.log(`Button ${children} rendered`);

  return (
    <button className="callback-button" onClick={onClick}>
      {children}
    </button>
  );
});

// Item list component
const ItemList = React.memo(({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("ItemList: getItems called");
    setItems(getItems());
  }, [getItems]); // This dependency is why we need useCallback

  return (
    <ul className="items-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
});

function UseCallbackDemo() {
  const { darkMode } = useTheme();
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  // Without useCallback - this function is recreated on every render
  const incrementWithoutCallback = () => {
    setCount((c) => c + 1);
  };

  // With useCallback - this function is memoized
  const incrementWithCallback = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // Empty dependency array means this function never changes

  // useCallback with dependencies - function changes when dependencies change
  const getItems = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]); // Regenerate when count changes

  // Toggle theme - another callback example
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#FFF",
    color: darkTheme ? "#FFF" : "#333",
    padding: "10px",
    borderRadius: "4px",
    margin: "10px 0",
  };

  const toggleTheme = useCallback(() => {
    setDarkTheme((prevTheme) => !prevTheme);
  }, []);

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>useCallback Hook Demo</h2>

      <div className="callback-example">
        <h3>Function Memoization with useCallback</h3>
        <p>Count: {count}</p>
        <p>
          The buttons below perform the same action, but one uses useCallback to
          memoize the function, preventing unnecessary re-creation on each
          render.
        </p>

        <div className="button-group">
          <Button onClick={incrementWithoutCallback}>
            Without useCallback
          </Button>
          <Button onClick={incrementWithCallback}>With useCallback</Button>
        </div>

        <p className="note">
          Check the console to see the difference in component re-renders. The
          Button with useCallback won't cause re-renders unless its props
          change.
        </p>
      </div>

      <div className="callback-example">
        <h3>useCallback with Dependencies</h3>

        <input
          type="text"
          value={text}
          style={{ marginBottom: "10px", width: "600px", padding: "10px" }}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something (won't affect ItemList)"
        />

        <div style={themeStyle}>
          <h4>Item List (depends on count):</h4>
          <ItemList getItems={getItems} />
          <button onClick={() => setCount((c) => c + 1)}>
            Increment Count
          </button>
        </div>

        <button onClick={toggleTheme}>Toggle Theme</button>

        <div className="code-explanation">
          <h4>When to use useCallback:</h4>
          <ul>
            <li>
              When passing callbacks to optimized child components that rely on
              reference equality
            </li>
            <li>
              When the callback is a dependency in another hook's dependency
              array
            </li>
            <li>
              For event handlers that don't need to be recreated on every render
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
