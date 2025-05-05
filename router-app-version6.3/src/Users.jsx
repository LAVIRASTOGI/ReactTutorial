import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

// Mock data for users
const MOCK_USERS = [
  {
    id: 1,
    name: "Lavi Rastogi",
    email: "lavi@example.com",
    role: "Administrator",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Senior developer with 10 years of experience in web development.",
  },
  {
    id: 2,
    name: "Yashu Rastogi",
    email: "yashu@example.com",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Creative designer specializing in UI/UX with a focus on user-centered design.",
  },
  {
    id: 3,
    name: "Dilip Rastogi",
    email: "dilip@example.com",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Full-stack developer with expertise in React and Node.js.",
  },
  {
    id: 4,
    name: "Chhavi Rastogi",
    email: "chhavi@example.com",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Experienced project manager with a track record of successful product launches.",
  },
];

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setUsers(MOCK_USERS);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <div className="card">Loading users...</div>;
  }

  return (
    <>
      <h1>Users</h1>
      <p>
        Browse through our user directory and click on a user to view their
        details.
      </p>

      <div className="user-list">
        {users.map((user) => (
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
    </>
  );
}

export default Users;
