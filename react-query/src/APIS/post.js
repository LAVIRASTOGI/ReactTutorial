export const getPosts = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const response = await fetch("https://jsonplaceholder.typicode.com/post");
    if (!response.ok) {
      throw new Error("Failed to fetch posts. Please try again later.");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
};

export const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};

export const createPost = async (post) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
  return response.json();
};

export const updatePost = async (id, post) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(post),
    }
  );
  return response.json();
};
