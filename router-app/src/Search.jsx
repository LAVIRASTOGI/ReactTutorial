import { useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  //debounce apply
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) {
        console.log("fetch API here");
        setResults([]);
      }
    }, 1000);

    return () => clearTimeout(timeoutId); // cleanup on next keystroke
  }, [query]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
    // use results
  );
}

export default Search;

//Fetch Data Once on Mount, Then Reuse
// Code splitting with lazy loading
//Dynamic Form Rendering
//const formFields = [
//     { name: 'email', label: 'Email', type: 'email' },
//     { name: 'age', label: 'Age', type: 'number' },
//     { name: 'role', label: 'Role', type: 'select', options: ['Admin', 'User'] },
//   ];
