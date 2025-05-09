import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </section>

      <div className="contact-container">
        <section className="contact-info">
          <h2>Get In Touch</h2>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h3>Address</h3>
              <p>123 React Street, JavaScript City, 10001</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@reactquerydemo.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">GitHub</a>
              <a href="#" className="social-icon">LinkedIn</a>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          {formStatus.submitted ? (
            <div className="form-success">
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
              <button 
                className="btn btn-primary"
                onClick={() => setFormStatus({ submitted: false, error: false })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default ContactPage;