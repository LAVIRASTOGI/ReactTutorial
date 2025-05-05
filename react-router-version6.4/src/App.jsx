import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Users from "./Users";
import UserDetails from "./UserDeatails";
import NotFound from "./NotFound";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./Search";
import SearchWithParams from "./SearchWithParams";

// Import the new product components
import Products from "./Products";
import ProductIndex from "./ProductIndex";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
import DiscountedProducts from "./DiscountedProducts";
import AppLayout from "./AppLayout";
import { fetchUser, fetchUserById } from "./api/fetchUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/users",
          element: <ProtectedRoute />,
          children: [
            {
              path: "/users",
              element: <Users />,
              loader: fetchUser,
            },
            {
              path: "/users/:id",
              element: <UserDetails />,
              loader: ({ params }) => fetchUserById(params.id),
            },
          ],
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/search",
              element: <Search />,
            },
          ],
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/search-params",
          element: <SearchWithParams />,
        },
        {
          path: "/products",
          element: <Products />,
          children: [
            {
              path: "/products",
              element: <ProductIndex />,
            },
            {
              path: "/products/featured",
              element: <FeaturedProducts />,
            },
            {
              path: "/products/new",
              element: <NewProducts />,
            },
            {
              path: "/products/discounted",
              element: <DiscountedProducts />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
