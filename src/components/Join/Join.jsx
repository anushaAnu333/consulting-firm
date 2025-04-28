// // Join.jsx
import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';
import tick from '../../assets/tick.png';

const Join = () => {
  const form = useRef();

  const handleJoin = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_extzqa9',
        'template_5fbt3fr',
        form.current,
        'VLwg1ltOWvnCYAiK_'
      )
      .then(
        () => alert('Thanks for joining! Check your inbox.'),
        () => alert('Oops, something went wrong.')
      );
  };

  return (
    <section className="join-section" id="join-us">
      <div className="join-container">
        {/* LEFT: Info & Benefits */}
        <div className="join-info">
          <h2>
            Ready to <span className="stroke">Level Up</span> Your Business?
          </h2>
          <p>Join our consulting community and unlock exclusive advantages:</p>
          <ul className="benefits-list">
            {[
              'Personalized strategy roadmap',
              'Access to industry‑leading tools',
              '24/7 dedicated support',
              'Quarterly performance reviews',
            ].map((b) => (
              <li key={b}>
                <img src={tick} alt="check" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Sign‑up Form */}
        <form ref={form} className="join-form" onSubmit={handleJoin}>
          <div className="input-group">
            <input type="text" name="user_name" required placeholder=" " />
            <label>Your Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="user_email" required placeholder=" " />
            <label>Email Address</label>
          </div>
          <div className="input-group">
            <input type="text" name="user_company" required placeholder=" " />
            <label>Company</label>
          </div>
          <div className="input-group">
            <input type="tel" name="user_phone" placeholder=" " />
            <label>Phone (optional)</label>
          </div>
          <button type="submit" className="btn-primary">
            Join Now
          </button>
        </form>
      </div>

    
     
    </section>
  );
};

export default Join;