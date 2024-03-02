import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../actions/contactAction";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const contactCreate = useSelector((state) => state.contactCreate);
  const { loading, success, error } = contactCreate;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const contactData = {
      name,
      email,
      message,
    };

    // Dispatch the createContact action
    dispatch(createContact(contactData));
  };

  return (
    <div className="contact-page">
      <h1 className="contact-page-title">Contact Us</h1>
      <div className="contact-page-content">
        <div className="contact-info">
          <h2 className="contact-info-title">Our Information</h2>
          <p className="contact-info-text">Email: info@example.com</p>
          <p className="contact-info-text">Phone: 123-456-7890</p>
          <p className="contact-info-text">Address: Shreeji Street near shevasi, Vadodara, India</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-form-title">Send Us a Message</h2>
          <input
            className="contact-form-input"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="contact-form-input"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="contact-form-input contact-form-textarea"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="contact-form-submit-button" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          {error && <p className="contact-form-error">{error}</p>}
          {success && <p className="contact-form-success">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

