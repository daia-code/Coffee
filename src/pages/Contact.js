import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <div className="contact-form-container">
    <form className="contact-form">
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Your Phone" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" required />
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  </div>
  );
}

export default Contact;
