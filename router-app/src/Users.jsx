import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";

function Users() {
  const navigate = useNavigate();

  return (
    <h1>
      this is user component List of Users-
      <Link to="homeUser">HomeUserDetails</Link>
      <Link to="lavi">Lavi</Link>
      <Link to="niteesh">Niteesh</Link>
      <button onClick={() => navigate("/login")}>Button Click</button>
      <Outlet />
    </h1>
  );
}

export default Users;
