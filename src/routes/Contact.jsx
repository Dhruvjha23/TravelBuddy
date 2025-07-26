import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";
import ContactImg from "../assets/img4.jpg";
import "../components/Hero.css";
import Footer from "../components/Footer";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="contact-wrapper">
        {/* Background image */}
        <img src={ContactImg} alt="Background" className="contact-bg" />

        <div className="contact-overlay">
          <motion.div
            className="contact-glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p><strong>📍</strong> 42 Explorer Lane, Delhi, India</p>
            <p><strong>📧</strong> support@travelbuddy.com</p>
            <p><strong>📞</strong> +91 98765 43210</p>

            <div className="social">
              <a href="#">🐦 Twitter</a>
              <a href="#">📸 Instagram</a>
              <a href="#">▶️ YouTube</a>
            </div>

            <button onClick={() => setModalOpen(true)}>📋 Book Now</button>

            <BookingModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              selectedPlace="Contact Page"
            />
          </motion.div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
