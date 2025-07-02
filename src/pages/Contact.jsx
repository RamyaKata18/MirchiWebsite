import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />

          <label>Message:</label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
          />

          <button type="submit">Send Message</button>

          {submitted && (
            <div className="submitted-message">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
        </form>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 Guntur, Andhra Pradesh, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ support@mirchiproducts.in</p>

          <div className="map-placeholder">
            {/* You can replace this with an iframe for Google Maps */}
            <p>🗺️ Map Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
