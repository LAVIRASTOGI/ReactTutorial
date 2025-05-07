import "./App.css";

// TanStack Query is a data-fetching and caching library for React (and other frameworks).
// It handles server state management — i.e., data that comes from APIs (remote servers) —
// like users, products, posts.

// TanStack Query is a data-fetching and caching library for React (and other frameworks).

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Posts } from "./Components/Posts";
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <h1>TanStack Query</h1>
      <QueryClientProvider client={queryClient}>
        <Posts />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
