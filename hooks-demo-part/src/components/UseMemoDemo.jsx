import React, { useState, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

// Expensive calculation function
const calculateFactorial = (num) => {
  console.log(`Calculating factorial for ${num}`);

  if (num < 0) return "Error: negative number";
  if (num === 0) return 1;

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Expensive filter function
const filterNumbers = (array, type) => {
  console.log(`Filtering ${type} numbers`);

  return array.filter((num) => {
    const isEven = num % 2 === 0;

    // Simulate expensive operation
    let i = 0;
    while (i < 1000000) i++;

    return type === "even" ? isEven : !isEven;
  });
};

function UseMemoDemo() {
  const { darkMode } = useTheme();
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);
  const [filterType, setFilterType] = useState("even");

  // Create an array of numbers
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  // Example 1: Without useMemo - recalculates on every render
  const factorialWithoutMemo = calculateFactorial(number);

  // Example 1: With useMemo - only recalculates when number changes
  const factorialWithMemo = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  // Example 2: useMemo for expensive filtering
  const filteredNumbers = useMemo(() => {
    return filterNumbers(numbers, filterType);
  }, [filterType, numbers]);

  // Example 3: useMemo for avoiding expensive object recreation
  const user = useMemo(() => {
    return {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      preferences: {
        theme: darkMode ? "dark" : "light",
        fontSize: "medium",
      },
    };
  }, [darkMode]); // Only recreate when darkMode changes

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>useMemo Hook Demo</h2>

      <div className="memo-example">
        <h3>Example 1: Memoizing Expensive Calculations</h3>
        <div className="input-area">
          <label htmlFor="number-input">Enter a number: </label>
          <input
            id="number-input"
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
            min="0"
            max="15"
          />
        </div>

        <p>
          <strong>Factorial without useMemo:</strong> {factorialWithoutMemo}
        </p>
        <p>
          <strong>Factorial with useMemo:</strong> {factorialWithMemo}
        </p>

        <button onClick={() => setCount((c) => c + 1)}>
          Click to Force Render (Count: {count})
        </button>

        <p className="note">
          Check the console to see when the factorial calculation runs. Without
          useMemo, it runs on every render. With useMemo, it only runs when the
          number changes.
        </p>
      </div>

      <div className="memo-example">
        <h3>Example 2: Memoizing Filtered Arrays</h3>

        <div className="filter-controls">
          <button
            className={filterType === "even" ? "active" : ""}
            onClick={() => setFilterType("even")}
          >
            Show Even
          </button>
          <button
            className={filterType === "odd" ? "active" : ""}
            onClick={() => setFilterType("odd")}
          >
            Show Odd
          </button>
        </div>

        <div className="filtered-results">
          <h4>Filtered Numbers ({filterType}):</h4>
          <ul>
            {filteredNumbers.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="memo-example">
        <h3>Example 3: Memoizing Objects</h3>
        <div className="user-info">
          <h4>User Object (memoized):</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>

        <p className="note">
          The user object is only recreated when the theme changes, not on every
          render. This is important when passing objects to child components
          that rely on reference equality checks.
        </p>

        <div className="code-explanation">
          <h4>When to use useMemo:</h4>
          <ul>
            <li>
              For expensive calculations that don't need to recompute on every
              render
            </li>
            <li>
              To memoize objects that would otherwise be recreated on every
              render
            </li>
            <li>
              When passing data to child components that use reference equality
              checks
            </li>
            <li>For values used in dependency arrays of other hooks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseMemoDemo;
