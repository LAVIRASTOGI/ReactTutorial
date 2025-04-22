import { useState } from "react";
import { Link } from "react-router-dom";

// Mock data for users (same as in Users.jsx and UserDetails.jsx)
const MOCK_USERS = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Administrator",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert@example.com",
    role: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Olivia Brown",
    email: "olivia@example.com",
    role: "QA Engineer",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    // Filter users based on search term
    const results = MOCK_USERS.filter((user) => {
      const term = searchTerm.toLowerCase();
      return (
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term)
      );
    });

    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <>
      <h1>Search Users</h1>
      <p>Search for users by name, email, or role.</p>

      <div className="card">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="search">Search Term</label>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="text"
                id="search"
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter name, email, or role"
              />
              <button type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>

      {hasSearched && (
        <div>
          <h2>Search Results ({searchResults.length})</h2>

          {searchResults.length === 0 ? (
            <div className="card">
              <p>No users found matching "{searchTerm}".</p>
            </div>
          ) : (
            <div className="user-list">
              {searchResults.map((user) => (
                <div className="user-card" key={user.id}>
                  <img src={user.avatar} alt={user.name} />
                  <div className="user-card-content">
                    <h3>{user.name}</h3>
                    <p>{user.role}</p>
                    <Link to={`/users/${user.id}`} className="btn-primary">
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
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
