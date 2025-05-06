import { Link, useLoaderData } from "react-router-dom";
import "./App.css";

function Users() {
  const users = useLoaderData();

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
            {/* <img src={user.avatar} alt={user.name} /> */}
            <div className="user-card-content">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
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
