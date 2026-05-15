'use client';

import React from 'react';
import './contact.css';

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
    </div>
  );
}
