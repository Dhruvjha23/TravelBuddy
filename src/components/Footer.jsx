import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mjrdyjs",
      "template_ub5svmj",       
      formRef.current,
      "Evt3xyoQsz5fms5gW"        
    ).then(() => {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    }).catch((error) => {
      console.error("Subscription failed:", error);
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2>🌍 TravelBuddy</h2>
          <p>Discover, explore, and enjoy unforgettable journeys across the world.</p>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <form ref={formRef} onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              name="subscriber_email"   // Matches my EmailJS variable(important)
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
          {success && <p className="success-message">🎉 You’ve successfully subscribed!</p>}
        </div>

        {/* Social Section */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><span>🌐</span></a>
            <a href="#"><span>📸</span></a>
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>▶️</span></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TravelBuddy. All rights reserved.
      </div>
    </footer>
  );
}
