export const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText,
        data: await response.json().catch(() => ({})),
      };
    }

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

    if (!response.ok) {
      // If user not found (404) or other error
      if (response.status === 404) {
        throw {
          status: 404,
          statusText: "User Not Found",
          data: { message: `User with ID ${id} does not exist` },
        };
      }

      throw {
        status: response.status,
        statusText: response.statusText,
        data: await response.json().catch(() => ({})),
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};
// Action function that will be called when the form is submitted
export async function contactAction({ request }) {
  try {
    // Get form data from the request
    const formData = await request.formData();

    // Convert FormData to a plain object
    const data = Object.fromEntries(formData);
    // console.log(data);
    // console.log(formData);
    // console.log(formData.get("name"));
    // console.log(formData.get("email"));
    // console.log(formData.get("message"));

    // Validate form data
    if (!data.name || !data.email || !data.message) {
      return {
        error: "Please fill in all fields",
      };
    }

    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate random API errors (1 in 10 chance)
    if (Math.random() < 0.1) {
      throw new Response(
        JSON.stringify({ message: "Server is temporarily unavailable" }),
        {
          status: 503,
          statusText: "Service Unavailable",
        }
      );
    }

    // In a real app, you would send the data to a server
    console.log("Form submitted with data:", data);

    // Return success response
    return {
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    };
  } catch (error) {
    // If it's already a Response object, throw it directly
    if (error instanceof Response) {
      throw error;
    }

    // Otherwise, create a new Response with the error details
    throw new Response(JSON.stringify({ message: "Failed to submit form" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
