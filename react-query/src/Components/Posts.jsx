import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, getPosts } from "../APIS/post";
import { useState } from "react";
import { Link } from "react-router-dom";

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

// refetchOnWindowFocus: true,
// refetchOnMount: true,
// refetchOnReconnect: true,
// retry: false,
// staleTime: 60000, // 1 minute,
// cacheTime: 60000, // 1 minute,

// refreshbackgroud: true,
// refetchInterval: 60000, // 1 minute,
// refectchIntveralInBackground: 60000 ,
// refetchIntervalInBackground: true,
// refetchOnFocus: true,
// refetchOnReconnect: true,
// refetchOnMount: true,

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPosts(currentPage, postsPerPage),
    retry: false,
    refetchInterval: 60000,
    refetchIntervalInBackground: true,
    // staleTime: 60000, // 1 minute,
    //  show previous data when new data is loading
    placeholderData: keepPreviousData,
  });

  const mutationFn = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      console.log("data", data, id);

      // invalidate queries - get new data from server
      // queryClient.invalidateQueries({ queryKey: ["posts", currentPage] });

      // update the data in the cache
      queryClient.setQueryData(["posts", currentPage], (old) => {
        return old.filter((post) => post.id !== id);
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading posts...</p>
      </div>
    );

  if (error)
    return (
      <div className="error-container">
        <h2>Error Loading Posts</h2>
        <p>{error.message}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );

  // Filter posts based on search term
  const filteredPosts = data?.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (e, postId) => {
    e.preventDefault(); // Prevent navigation to post detail
    e.stopPropagation(); // Prevent event bubbling
    console.log(`Delete post with ID: ${postId}`);
    mutationFn.mutate(postId);
    // Here you would add the actual delete functionality
  };

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h1>Blog Posts</h1>
        <p>Explore our collection of {filteredPosts?.length} posts</p>

        {/* Add New Post Button */}
        <button className="btn btn-primary add-post-btn">
          <span className="add-icon">+</span> Add New Post
        </button>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input"
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => {
                setSearchTerm("");
                setCurrentPage(1);
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {filteredPosts?.length === 0 ? (
        <div className="no-results">
          <h2>No posts found</h2>
          <p>Try adjusting your search term</p>
        </div>
      ) : (
        <>
          <div className="posts-grid">
            {data?.map((post) => (
              <div key={post.id} className="post-card-wrapper">
                <Link to={`/posts/${post.id}`} className="post-card">
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">
                    {post.body.substring(0, 100)}
                    {post.body.length > 100 ? "..." : ""}
                  </p>
                  <div className="post-footer">
                    <span className="post-author">Post {post.id}</span>
                    <span className="post-read-more">Read more →</span>
                  </div>
                </Link>
                {/* Delete Button */}
                <button
                  className="btn btn-delete"
                  onClick={(e) => handleDelete(e, post.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              &laquo; Previous
            </button>

            <div className="page-numbers">
              <h4> {currentPage} </h4>
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              // disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Next &raquo;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
