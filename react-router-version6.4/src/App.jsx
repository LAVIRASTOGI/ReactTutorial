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
import AppLayout from "./AppLayout";
import { contactAction, fetchUser, fetchUserById } from "./api/fetchUser";

// v6.4 introduces Data Routers
// createBrowserRouter creates a "Data Router" that:
// 1. Supports loaders: Fetch data before rendering a route
// 2. Supports errorElement: Show fallback UI when loaders or actions throw errors
// 3. Supports lazy loading: Load components on-demand for better performance
// 4. Supports nested loaders: Load data at multiple route levels simultaneously
// 5. Supports nested actions: Handle form submissions/mutations from a route

// Create a new data router that manages the application
// path via history.pushState and history.replaceState.

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
          action: contactAction, // Add the action function for form processing
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
              lazy: () =>
                import("./DiscountedProducts").then((module) => ({
                  //The module object returned by import()
                  //	We are returning an object with a key named Component
                  //module.default	The default export from DiscountedProducts.js
                  //Component	We assign it to key named Component
                  Component: module.default,

                  // if not default name
                  //  Component: module.DiscountedProducts,
                })),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      {/*  (activates) your router configuration. */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
