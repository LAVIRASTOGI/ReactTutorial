import { Link, useNavigate, useLoaderData } from "react-router-dom";

// Mock data for users (same as in Users.jsx)
const MOCK_USERS = [
  {
    id: 1,
    name: "Lavi Rastogi",
    email: "lavi@example.com",
    role: "Administrator",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Senior developer with 10 years of experience in web development.",
    phone: "9876543210",
    location: "New Delhi, India",
    department: "IT",
    joinDate: "2020-01-15",
  },
  {
    id: 2,
    name: "Yashu Rastogi",
    email: "yashu@example.com",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Creative designer specializing in UI/UX with a focus on user-centered design.",
    phone: "9876543210",
    location: "New Delhi, India",
    department: "IT",
    joinDate: "2020-01-15",
  },
  {
    id: 3,
    name: "Dilip Rastogi",
    email: "dilip@example.com",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Full-stack developer with expertise in React and Node.js.",
    phone: "9876543210",
    location: "New Delhi, India",
    department: "IT",
    joinDate: "2020-01-15",
  },
  {
    id: 4,
    name: "Chhavi Rastogi",
    email: "chhavi@example.com",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Experienced project manager with a track record of successful product launches.",
    phone: "9876543210",
    location: "New Delhi, India",
    department: "IT",
    joinDate: "2020-01-15",
  },
];

function UserDetails() {
  const user = useLoaderData();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="card">
        <h2>User Not Found</h2>
        <p>The user you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/users")}>Back to Users</button>
      </div>
    );
  }

  return (
    <div className="user-details" style={{ margin: "20px" }}>
      <div className="user-header">
        <div className="user-details-info">
          <h1>{user.name}</h1>

          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Location:</strong> {user.address?.city}
          </p>
        </div>
      </div>

      <Link to="/users">
        <button>Back to Users</button>
      </Link>
    </div>
  );
}

export default UserDetails;
