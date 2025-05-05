import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./QueryParamsStyles.css";

function SearchWithParams() {
  //example of search with query params
  // /search-params?q=laptop&category=electronics&sort=price_asc
  // /search-params?q=laptop&category=electronics&sort=price_desc

  // Get and set the query parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // Get values from query params
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sort") || "relevance";

  console.log(query, category, sortBy);
  // Local state for the form
  const [searchInput, setSearchInput] = useState(query);

  // Example search results
  const [results, setResults] = useState([]);

  // Simulate search results based on query params
  useEffect(() => {
    // Mock data - in a real app, you'd fetch from a database or API
    const mockData = [
      { id: 1, name: "Smartphone", category: "electronics", price: 699 },
      { id: 2, name: "Laptop", category: "electronics", price: 1299 },
      { id: 3, name: "Headphones", category: "electronics", price: 199 },
      { id: 4, name: "Running Shoes", category: "clothing", price: 89 },
      { id: 5, name: "T-shirt", category: "clothing", price: 29 },
      { id: 6, name: "Coffee Maker", category: "home", price: 149 },
      { id: 7, name: "Blender", category: "home", price: 79 },
      { id: 8, name: "Tennis Racket", category: "sports", price: 119 },
    ];

    // Filter by search query and category
    let filtered = [...mockData];

    if (query) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Sort results
    if (sortBy === "price_asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setResults(filtered);
  }, [query, category, sortBy]);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Update the URL with the new search query
    setSearchParams({
      q: searchInput,
      category: category,
      sort: sortBy,
    });
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSearchParams({
      q: query,
      category: e.target.value,
      sort: sortBy,
    });
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSearchParams({
      q: query,
      category: category,
      sort: e.target.value,
    });
  };

  return (
    <div className="query-params-demo">
      <h2>Search with Query Parameters</h2>

      <div className="search-form">
        <form onSubmit={handleSearch}>
          <div className="form-row">
            <div className="form-group">
              <label>Search:</label>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter search term"
              />
            </div>

            <button type="submit">Search</button>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category:</label>
              <select value={category} onChange={handleCategoryChange}>
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home & Kitchen</option>
                <option value="sports">Sports</option>
              </select>
            </div>

            <div className="form-group">
              <label>Sort By:</label>
              <select value={sortBy} onChange={handleSortChange}>
                <option value="relevance">Relevance</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="search-results">
        <h3>Results ({results.length})</h3>
        {results.length > 0 ? (
          <div className="results-grid">
            {results.map((item) => (
              <div key={item.id} className="result-card">
                <h4>{item.name}</h4>
                <p>Category: {item.category}</p>
                <p className="price">${item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No results found. Try another search.</p>
        )}
      </div>
    </div>
  );
}

export default SearchWithParams;
