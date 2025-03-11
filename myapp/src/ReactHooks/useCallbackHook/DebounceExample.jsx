import React, { useCallback, useState } from "react";
import useDebounce from "./useDebounce";
import useThrottle from "./useThrottle";

const DebounceExample = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Throttle the incrementCount function with a 1000ms (1 second) delay
  const throttledIncrement = useThrottle(incrementCount, 1000);

  // Simulate an API call
  const fetchResults = useCallback((searchQuery) => {
    console.log("Fetching results for:", searchQuery);
    // Replace this with an actual API call
    setResults([`Result 1 for ${searchQuery}`, `Result 2 for ${searchQuery}`]);
  }, []);

  // Debounce the fetchResults function with a 300ms delay
  const debouncedFetchResults = useDebounce(fetchResults, 300);

  // Handle input change
  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    debouncedFetchResults(value); // Call the debounced function
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>

      <hr></hr>
      <p>Count: {count}</p>
      <button onClick={throttledIncrement}>Increment</button>
      <p>
        Try clicking the button rapidly. It will only increment once per second.
      </p>
    </div>
  );
};

export default DebounceExample;
