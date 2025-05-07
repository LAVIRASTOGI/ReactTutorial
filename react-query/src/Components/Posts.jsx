import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../APIS/post";

/**
 * useQuery Options Reference Table:
 * ---------------------------------------------------------------------
 * | Option                | Type                  | Default          | Description                                           |
 * |----------------------|------------------------|------------------|-------------------------------------------------------|
 * | queryKey             | string or array        | required         | Unique key to identify and cache the query            |
 * | queryFn              | function               | required         | Function that returns a Promise (fetches the data)    |
 * | enabled              | boolean                | true             | Enables or disables automatic query execution         |
 * | staleTime            | number (ms)            | 0                | Time before data is considered stale                  |
 * | cacheTime            | number (ms)            | 300000 (5 min)   | Time unused cache stays in memory                     |
 * | refetchOnWindowFocus | boolean or 'always'    | true             | Refetch when window regains focus                     |
 * | refetchOnMount       | boolean or 'always'    | true             | Refetch on component mount                            |
 * | refetchOnReconnect   | boolean                | true             | Refetch when network reconnects                       |
 * | retry                | boolean/number/function| 3                | Number of retry attempts on failure                   |
 * | retryDelay           | number or function     | 1000 ms          | Delay between retries                                 |
 * | select               | function               | undefined        | Transform/filter data before returning to component   |
 * | placeholderData      | any                    | undefined        | Placeholder data shown while loading                  |
 * | initialData          | any or function        | undefined        | Initial data for the first render                     |
 * | suspense             | boolean                | false            | Enable React Suspense for handling loading states     |
 * | onSuccess            | function               | undefined        | Callback on successful fetch                          |
 * | onError              | function               | undefined        | Callback on error                                     |
 * | onSettled            | function               | undefined        | Callback after either success or error                |
 * | structuralSharing    | boolean                | true             | Reduces unnecessary re-renders by comparing data      |
 * ---------------------------------------------------------------------
 */
export const Posts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: false, // Disable automatic retries
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
      {data?.length > 0 &&
        data?.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};
