import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [form, setForm] = useState({ name: "", content: "", email: "" });

  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <div className="card-right-active card-right">
      <div className="col-title">
        <h2>Find me here!</h2>
      </div>
      <div className="contact-container">
        <div className="contact-container-form">
          <form action="#" className="contactForm">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={handleChange} />
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" onChange={handleChange} />
            <label htmlFor="content">Content</label>
            <textarea id="content" onChange={handleChange} />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
