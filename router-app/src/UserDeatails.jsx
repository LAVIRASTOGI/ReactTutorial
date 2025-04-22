import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Mock data for users (same as in Users.jsx)
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

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      const foundUser = MOCK_USERS.find((user) => user.id === parseInt(id));
      if (foundUser) {
        setUser(foundUser);
      }
      setLoading(false);
    }, 600);
  }, [id]);

  if (loading) {
    return <div className="card">Loading user details...</div>;
  }

  if (!user) {
    return (
      <div className="card">
        <h2>User Not Found</h2>
        <p>The user you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/users")}>Back to Users</button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="user-details">
      <div className="user-header">
        <img src={user.avatar} alt={user.name} />
        <div className="user-details-info">
          <h1>{user.name}</h1>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
          <p>
            <strong>Department:</strong> {user.department}
          </p>
          <p>
            <strong>Joined:</strong> {formatDate(user.joinDate)}
          </p>
        </div>
      </div>

      <div className="user-bio">
        <h2>About</h2>
        <p>{user.bio}</p>
      </div>

      <Link to="/users">
        <button>Back to Users</button>
      </Link>
    </div>
  );
}

export default UserDetails;
