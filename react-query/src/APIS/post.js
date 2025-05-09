import { posts } from "../json/post";

export const getPosts = async (currentPage, postsPerPage = 10) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = posts.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );
    console.log(data);
    return data;

    // 0, 10  1
    // 10, 10 2
    // 20, 10 3
    // 30, 10 4
    // 40, 10 5
    // 50, 10 6
    // 60, 10 7
    // if (!response.ok) {
    //   throw new Error("Failed to fetch posts. Please try again later.");
    // } else {
    //   return response.json();
    // }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
};

export const getPost = async (id) => {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`
  // );

  // return response.json();
  return posts.find((post) => post.id === parseInt(id));
};

export const createPost = async (post) => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify(post),
  // });
  // return response.json();
  let newPostsData = { ...post, id: posts?.length + 1 };
  //  const newPosts = [newPostsData, ...posts];
  return newPostsData;
};

export const updatePost = async (id, postData) => {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`,
  //   {
  //     method: "PUT",
  //     body: JSON.stringify(post),
  //   }
  // );
  // return response.json();
  let newPostsData = { ...postData, id: Math.floor(Math.random() * 1000) };
  const newPosts = posts.map((post) => {
    if (post.id === parseInt(id)) {
      return newPostsData;
    }
    return post;
  });
  return newPosts;
};

export const deletePost = async (id) => {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`,
  //   { method: "DELETE" }
  // );
  // return response.json();

  const newPosts = posts.filter((post) => post.id !== parseInt(id));
  // console.log(newPosts);
  return newPosts;
};
