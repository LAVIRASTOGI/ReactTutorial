import { Form, useActionData, useNavigation } from "react-router-dom";

function Contact() {
  // Get form submission results from the action
  const actionData = useActionData();

  // Get current navigation state (idle, loading, submitting)
  const navigation = useNavigation();

  // Check if the form is currently being submitted
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>

      {actionData?.success && (
        <div className="alert alert-success">{actionData.message}</div>
      )}

      {actionData?.error && (
        <div className="alert alert-error">{actionData.error}</div>
      )}

      <div className="card">
        {/* Using Form from react-router-dom instead of regular form */}
        <Form method="post" action="/contact">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="6"
              placeholder="Your message"
              style={{ resize: "vertical" }}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </Form>
      </div>

      <div className="card" style={{ marginTop: "2rem" }}>
        <h2>Other Ways to Reach Us</h2>
        <p>
          <strong>Email:</strong> support@userportal.example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, Tech City, CA 94000
        </p>
      </div>
    </div>
  );
}

export default Contact;
