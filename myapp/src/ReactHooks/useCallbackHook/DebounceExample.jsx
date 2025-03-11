import React, { useCallback, useState } from "react";
import useDebounce from "./useDebounce";

const DebounceExample = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
    </div>
  );
};

export default DebounceExample;
