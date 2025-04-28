
import React, { useRef } from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const navLinks = ['Home', 'Services', 'About Us', 'Blog', 'Contact'];
const resources = ['Case Studies', 'Whitepapers', 'Webinars', 'FAQs'];

export default function Footer() {
  const emailRef = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) return;
    alert(`Subscribed ${email}!`);
    emailRef.current.value = '';
  };

  return (
    <footer className="footer-section">
      <div className="footer-grid">
        {/* About & logo */}
        <div className="footer-col">
          <img src={Logo} alt="Company logo" className="footer-logo" />
          <p className="footer-about">
            We help businesses transform through data‑driven strategies and
            hands‑on support. Let’s build something great together.
          </p>
          <div className="social-links">
            {[Github, Instagram, LinkedIn].map((src, i) => (
              <img key={i} src={src} alt="" className="social-icon" />
            ))}
          </div>
        </div>

        {/* Quick Nav */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul className="footer-list">
            {resources.map((res) => (
              <li key={res}>
                <a href={`#${res.toLowerCase().replace(/\s/g, '-')}`}>{res}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Get the latest insights and updates straight to your inbox.</p>
          <form className="footer-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              ref={emailRef}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>

      {/* Decorative Blurs */}
      <div className="footer-blur blur-left" />
      <div className="footer-blur blur-right" />
    </footer>
  );
}