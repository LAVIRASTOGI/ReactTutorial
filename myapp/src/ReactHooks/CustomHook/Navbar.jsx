import useAuth from "./useAuth";

// Usage in a component
function Navbar() {
  const { user, loading, logout, login } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <nav>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in.</p>
          <button onClick={() => login("dummy-token")}>Login</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
