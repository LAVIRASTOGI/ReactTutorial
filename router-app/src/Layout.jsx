import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout({ isLoggedIn, onLogout }) {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
