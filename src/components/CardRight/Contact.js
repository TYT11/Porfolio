import React, { useState, useRef } from "react";
import "./Contact.scss";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "./Head";

const Contact = () => {
  const [form, setForm] = useState({ name: "", content: "", email: "" });
  const [success, setSuccess] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue() || "";
    const data = {
      service_id: "service_ny5x4d1",
      template_id: "template_oi9cgg7",
      user_id: "user_KBkVxUnv08TFGU1hNf2J2",
      template_params: {
        username: "Porfolio",
        from_name: form.name,
        message: form.content,
        reply_to: form.email,
        "g-recaptcha-response": recaptchaValue,
      },
    };
    if (recaptchaValue) {
      console.log(recaptchaValue);
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setForm({ name: "", content: "", email: "" });
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2500);
        })
        .catch((res) => console.log(res));
    } else {
      alert("Please check the reCAPTCHA");
    }
  };

  return (
    <div className="card-right-active card-right">
      <Head title="Contact" desc="Contact form to send me e-mails." />
      <div className="col-title">
        <h2>Find me here!</h2>
      </div>
      <div className={`${success ? "alert-success" : ""} alert `}>
        {success ? "Message sent successfully ❤️" : ""}
      </div>

      <div className="contact-container">
        <div className="contact-container-form">
          <form action="#" className="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={form.name}
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              onChange={handleChange}
              value={form.email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              onChange={handleChange}
              value={form.content}
              required
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              className="recapt"
              sitekey="6Ld3UVQaAAAAAAAtlpM2ReREuT9KqdvyTWW_fgQB"
            />

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
