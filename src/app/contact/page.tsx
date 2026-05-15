'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-header container">
        <h1 className="serif-title">Contact Us</h1>
        <p className="page-description">We are here to help with any questions you may have.</p>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-block">
              <h3>General Inquiries</h3>
              <p>Email: <a href="mailto:hello@trovestudio.co.za">hello@trovestudio.co.za</a></p>
              <p>Phone: +27 (0) 12 345 6789</p>
            </div>

            <div className="info-block">
              <h3>Studio Hours</h3>
              <p>Monday — Friday: 9am — 5pm</p>
              <p>Saturday: 10am — 2pm</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="info-block">
              <h3>Press & Collaborations</h3>
              <p>Email: <a href="mailto:press@trovestudio.co.za">press@trovestudio.co.za</a></p>
            </div>

            <div className="info-block social-links">
              <h3>Follow Us</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="press">Press</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
          margin-bottom: 16px;
        }
        .page-description {
          font-size: 16px;
          color: var(--color-text-light);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 100px;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .info-block h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          font-weight: 500;
        }
        .info-block p, .info-block a {
          font-size: 16px;
          color: var(--color-text-light);
          margin-bottom: 8px;
          display: block;
        }
        .info-block a:hover {
          color: var(--color-text);
          text-decoration: underline;
        }
        .social-links ul {
          display: flex;
          gap: 24px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          padding: 12px 0;
          border: none;
          border-bottom: 1px solid var(--color-border);
          background: transparent;
          font-family: inherit;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-bottom-color: var(--color-text);
        }
        .submit-btn {
          margin-top: 24px;
          padding: 16px 32px;
          background-color: var(--color-text);
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
          font-weight: 500;
          transition: opacity 0.3s ease;
          width: fit-content;
        }
        .submit-btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        @media (max-width: 768px) {
          .serif-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
