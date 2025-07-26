import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./BookingModal.css";

const destinations = [
  "Goa", "Manali", "Kerala", "Jaipur", "Ladakh", "Rishikesh", "Meghalaya", "Varanasi",
  "Trekking", "Houseboat Stay", "Desert Safari", "River Rafting", "Hot Air Balloon", "Wildlife Safari", "Ayurveda Retreat", "Snow Camping",
  "Hampi", "Khajuraho", "Konark", "Madurai", "Fatehpur Sikri", "Mysore", "Nalanda", "Mahabalipuram"
];

export default function BookingModal({ isOpen, onClose, selectedPlace }) {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_nt8h9yq",
      "template_uav7qll",       
      form.current,
      "_dKwuaFONjDg6ZNH0"    
    ).then(() => {
      setSubmitted(true);
      form.current.reset();
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Book Your Experience</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />
          <input
            type="number"
            name="passengers"
            placeholder="No. of Passengers"
            required
          />
          <input
            type="number"
            name="duration"
            placeholder="Trip Duration (in days)"
            required
          />
          <select
            name="destination"
            defaultValue={selectedPlace || ""}
            required
          >
            <option value="" disabled>Select Destination</option>
            {destinations.map((place, i) => (
              <option key={i} value={place}>{place}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
        {submitted && (
          <p className="thank-you">✅ Thank you! Our team will contact you shortly.</p>
        )}
      </div>
    </div>
  );
}
