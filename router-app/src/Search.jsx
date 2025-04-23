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
    bio: "Senior developer with 10 years of experience in web development.",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    department: "Engineering",
    joinDate: "2020-05-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Creative designer specializing in UI/UX with a focus on user-centered design.",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    department: "Design",
    joinDate: "2021-02-10",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Full-stack developer with expertise in React and Node.js.",
    phone: "+1 (555) 345-6789",
    location: "Seattle, WA",
    department: "Engineering",
    joinDate: "2019-11-05",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Experienced project manager with a track record of successful product launches.",
    phone: "+1 (555) 456-7890",
    location: "Chicago, IL",
    department: "Product",
    joinDate: "2022-03-20",
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert@example.com",
    role: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "DevOps professional focused on CI/CD pipelines and cloud infrastructure.",
    phone: "+1 (555) 567-8901",
    location: "Austin, TX",
    department: "Operations",
    joinDate: "2021-07-12",
  },
  {
    id: 6,
    name: "Olivia Brown",
    email: "olivia@example.com",
    role: "QA Engineer",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Quality assurance specialist with expertise in automated testing.",
    phone: "+1 (555) 678-9012",
    location: "Portland, OR",
    department: "Engineering",
    joinDate: "2020-09-30",
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
