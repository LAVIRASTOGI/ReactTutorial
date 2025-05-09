import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../APIS/post";

const Post = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  if (isLoading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading post...</p>
      </div>
    );

  if (error)
    return (
      <div className="error-container">
        <h2>Error Loading Post</h2>
        <p>{error.message}</p>
        <Link to="/posts" className="btn btn-primary">
          Back to Posts
        </Link>
      </div>
    );

  if (!data)
    return (
      <div className="not-found-container">
        <h2>Post Not Found</h2>
        <p>The post you're looking for doesn't exist or has been removed.</p>
        <Link to="/posts" className="btn btn-primary">
          Back to Posts
        </Link>
      </div>
    );

  return (
    <div className="post-detail-container">
      <div className="post-navigation">
        <Link to="/posts" className="back-link">
          &larr; Back to Posts
        </Link>
      </div>

      <article className="post-detail">
        <div className="post-header">
          <span className="post-meta">Post #{data.id} </span>
          <h1 className="post-title">{data.title}</h1>
        </div>

        <div className="post-content">
          {data.body.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="post-actions">
          <button className="btn btn-outline">Share</button>
          <button className="btn btn-outline">Save</button>
        </div>
      </article>

      <div className="related-posts">
        <h3>You might also like</h3>
        <div className="related-posts-placeholder">
          <p>Related posts would appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
