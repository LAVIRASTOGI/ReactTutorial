import { Link, Route, Routes } from "react-router-dom";

import LandingPage from "./landingPage";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Users from "./Users";
import UserDeatails from "./UserDeatails";
import HomeUserDetails from "./HomeUserDetails";
import NotFound from "./NotFound";
import { lazy } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./Search";
import UserHome from "./UserHome";

//const Users = lazy(() => import("./Users"));
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<Users />}>
          {/* child */}
          <Route index element={<HomeUserDetails />} />
          <Route path=":id" element={<UserDeatails />} />
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Search /> */}
    </>
  );
}

export default App;
