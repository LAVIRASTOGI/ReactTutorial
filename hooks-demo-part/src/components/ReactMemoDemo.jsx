import React, { useState, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

// Regular component (not memoized)
const RegularComponent = ({ name, count }) => {
  console.log(`RegularComponent rendered: ${name}`);

  return (
    <div className="demo-component">
      <h4>Regular Component (Not Memoized)</h4>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
    </div>
  );
};

// Memoized component
const MemoizedComponent = React.memo(({ name, count }) => {
  console.log(`MemoizedComponent rendered: ${name}`);

  return (
    <div className="demo-component">
      <h4>Memoized Component</h4>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
    </div>
  );
});

// Component that uses custom comparison function
const MemoizedWithComparison = React.memo(
  ({ user, onClick }) => {
    console.log("MemoizedWithComparison rendered");

    return (
      <div className="demo-component">
        <h4>Memoized with Custom Comparison</h4>
        <p>User ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <button onClick={onClick}>Click Me</button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison: only re-render if user ID changes
    return prevProps.user.id === nextProps.user.id;
  }
);

function ReactMemoDemo() {
  const { darkMode } = useTheme();
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const [userId, setUserId] = useState(1);

  // This object is recreated on every render
  const user = {
    id: userId,
    name: `User ${userId}`,
    lastUpdated: new Date().toLocaleTimeString(),
  };

  // Memoized callback
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>React.memo Demo</h2>

      <div className="controls">
        <button onClick={() => setCount((c) => c + 1)}>
          Increase Count: {count}
        </button>
        <button
          onClick={() => setName((n) => (n === "John" ? "Jane" : "John"))}
        >
          Toggle Name: {name}
        </button>
        <button onClick={() => setUserId((id) => id + 1)}>
          Change User ID: {userId}
        </button>
      </div>

      <p className="instruction">
        Open the browser console to see which components re-render when state
        changes
      </p>

      <div className="component-containers">
        <div className="component-example">
          <RegularComponent name={name} count={count} />
        </div>

        <div className="component-example">
          <MemoizedComponent name={name} count={count} />
        </div>

        <div className="component-example">
          <MemoizedWithComparison user={user} onClick={handleClick} />
        </div>
      </div>

      <div className="memo-explanation">
        <h3>How React.memo Works</h3>
        <p>
          React.memo is a higher-order component (HOC) that memoizes the
          rendered output of the wrapped component, preventing unnecessary
          re-renders.
        </p>

        <h4>Key Points:</h4>
        <ul>
          <li>By default, React.memo performs a shallow comparison of props</li>
          <li>
            If props haven't changed, it reuses the previous rendered result
          </li>
          <li>
            You can provide a custom comparison function as a second argument
          </li>
          <li>
            React.memo only affects props changes, not state or context changes
            within the component
          </li>
        </ul>

        <div className="code-sample">
          <pre>
            {`const MemoizedComponent = React.memo(MyComponent);

// With custom comparison function
const MemoizedWithCustomComparison = React.memo(
  MyComponent,
  (prevProps, nextProps) => {
    // Return true if you want to prevent the re-render
    return prevProps.id === nextProps.id;
  }
);`}
          </pre>
        </div>

        <h4>When to use React.memo:</h4>
        <ul>
          <li>For components that render often with the same props</li>
          <li>For expensive components where rendering is costly</li>
          <li>
            For pure functional components that render the same result given the
            same props
          </li>
          <li>
            When child components receive object references that might change
            identity but not content
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReactMemoDemo;
