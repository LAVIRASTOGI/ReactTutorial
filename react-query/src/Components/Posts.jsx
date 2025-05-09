import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { createPost, deletePost, getPosts } from "../APIS/post";
import { useState } from "react";
import { Link } from "react-router-dom";
// import PostModal from "./PostModal";

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const postsPerPage = 10;
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPosts(currentPage, postsPerPage),
    retry: false,
    refetchInterval: 60000,
    refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      console.log("data", data, id);

      // update the data in the cache
      queryClient.setQueryData(["posts", currentPage], (old) => {
        return old.filter((post) => post.id !== id);
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const createMutation = useMutation({
    mutationFn: (postData) => createPost(postData),
    onSuccess: (data) => {
      console.log("Post created:", data);

      // Update cache with new post
      queryClient.setQueryData(["posts", currentPage], (old) => {
        return [data, ...old];
      });

      // Close modal and reset form
      setIsModalOpen(false);
      setNewPost({ title: "", body: "", userId: 1 });
    },
    onError: (error) => {
      console.log("Error creating post:", error);
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
    deleteMutation.mutate(postId);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewPost({ title: "", body: "", userId: 1 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(newPost);
  };

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h1>Blog Posts</h1>
        <p>Explore our collection of {filteredPosts?.length} posts</p>

        {/* Add New Post Button */}
        <button
          className="btn btn-primary add-post-btn"
          onClick={handleOpenModal}
        >
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
              className="pagination-button"
            >
              Next &raquo;
            </button>
          </div>
        </>
      )}

      {/* Modal for adding new post */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add New Post</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Content</label>
                <textarea
                  id="body"
                  name="body"
                  rows="6"
                  value={newPost.body}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={createMutation.isPending}
                >
                  {createMutation.isPending ? "Creating..." : "Create Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
