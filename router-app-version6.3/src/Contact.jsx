import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        success: false,
        message: "Please fill in all fields",
      });
      return;
    }

    // In a real app, you would send the data to a server
    // For this demo, we'll just simulate success
    setStatus({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>

      {status && (
        <div
          className={`alert ${
            status.success ? "alert-success" : "alert-error"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              style={{ resize: "vertical" }}
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
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
