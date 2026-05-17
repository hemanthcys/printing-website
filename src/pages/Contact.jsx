import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      <div className="contact-hero">
        <div className="container">
          <p className="contact-eyebrow">Reach Out</p>
          <h1>Contact Us</h1>
          <p>Get a free quote or ask us anything about your print project</p>
        </div>
      </div>

      <div className="container contact-grid">

        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have a question or ready to place an order? Our team is here to help.</p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <strong>Address</strong>
                <p>11-5-398/1, Red Hills, Lakdikapul,<br />Hyderabad, Telangana 500004, India</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <strong>Phone</strong>
                <p>+91 98663 15797</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉</div>
              <div>
                <strong>Email</strong>
                <p>info@bombayprinters.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <strong>Hours</strong>
                <p>Monday – Saturday: 9 am – 6 pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="success-msg">
              <div className="success-icon">✓</div>
              <h3>Message Sent</h3>
              <p>Thank you for reaching out. We will get back to you within one business day.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Request a Quote</h2>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                </div>
                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a category</option>
                    <option>Books & Publications</option>
                    <option>Packaging & Cartons</option>
                    <option>Labels & Stickers</option>
                    <option>Brochures & Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project — quantity, size, finish, and any other details..." rows={5} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;
