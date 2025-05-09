export const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

// Action function that will be called when the form is submitted
export async function contactAction({ request }) {
  // Get form data from the request
  const formData = await request.formData();

  console.log(formData);
  // Convert FormData to a plain object
  const data = Object.fromEntries(formData);

  // const name = formData.get("name");
  // const email = formData.get("email");
  // const message = formData.get("message");

  // Validate form data
  if (!data.name || !data.email || !data.message) {
    return {
      error: "Please fill in all fields",
    };
  }

  // Simulate API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, you would send the data to a server
  console.log("Form submitted with data:", data);

  // Return success response
  return {
    success: true,
    message: "Message sent successfully! We'll get back to you soon.",
  };
}
