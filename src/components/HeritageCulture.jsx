import { useState } from "react";
import { motion } from "framer-motion";
import "./SectionStyles.css";
import BookingModal from "./BookingModal";

import Hampi from "../assets/hampi.jpg";
import Khajuraho from "../assets/khajuraho.jpg";
import Konark from "../assets/konark.jpg";
import Madurai from "../assets/madurai.jpg";
import Fatehpur from "../assets/fatehpur.jpg";
import Mysore from "../assets/mysore.jpg";
import Nalanda from "../assets/nalanda.jpg";
import Mahabalipuram from "../assets/mahabalipuram.jpg";

const heritageSpots = [
  { title: "Hampi", image: Hampi, description: "Ruins of Vijayanagara Empire." },
  { title: "Khajuraho", image: Khajuraho, description: "Ancient erotic sculptures." },
  { title: "Konark", image: Konark, description: "Sun temple marvel." },
  { title: "Madurai", image: Madurai, description: "Meenakshi temple traditions." },
  { title: "Fatehpur Sikri", image: Fatehpur, description: "Mughal architecture." },
  { title: "Mysore", image: Mysore, description: "Palace of Wodeyars." },
  { title: "Nalanda", image: Nalanda, description: "Ancient learning center." },
  { title: "Mahabalipuram", image: Mahabalipuram, description: "Stone carvings & temples." },
];

export default function HeritageCulture() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-wrapper">
      <h2>Heritage & Culture</h2>
      <div className="section-grid">
        {heritageSpots.map((spot, index) => (
          <motion.div
            key={index}
            className="section-card heritage-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={spot.image} alt={spot.title} />
            <div className="card-content">
              <h3>{spot.title}</h3>
              <p>{spot.description}</p>
              <button
                onClick={() => {
                  setSelectedPlace(spot.title);
                  setShowModal(true);
                }}
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedPlace={selectedPlace}
      />
    </div>
  );
}
