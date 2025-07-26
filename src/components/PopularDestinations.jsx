import { useState } from "react";
import { motion } from "framer-motion";
import "./SectionStyles.css";
import BookingModal from "./BookingModal";

import Goa from "../assets/goa.jpg";
import Manali from "../assets/manali.jpg";
import Kerala from "../assets/kerala.jpg";
import Jaipur from "../assets/jaipur.jpg";
import Ladakh from "../assets/ladakh.jpg";
import Rishikesh from "../assets/rishikesh.jpg";
import Meghalaya from "../assets/meghalaya.jpg";
import Varanasi from "../assets/varanasi.jpg";

const destinations = [
  { title: "Goa", image: Goa, description: "Beaches & nightlife." },
  { title: "Manali", image: Manali, description: "Snow & adventure." },
  { title: "Kerala", image: Kerala, description: "Backwaters & greenery." },
  { title: "Jaipur", image: Jaipur, description: "Royal heritage." },
  { title: "Ladakh", image: Ladakh, description: "Barren beauty." },
  { title: "Rishikesh", image: Rishikesh, description: "Spiritual hub." },
  { title: "Meghalaya", image: Meghalaya, description: "Waterfalls & caves." },
  { title: "Varanasi", image: Varanasi, description: "Ghats & rituals." },
];

export default function PopularDestinations() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-wrapper" id="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="section-grid">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            className="section-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={dest.image} alt={dest.title} />
            <div className="card-content">
              <h3>{dest.title}</h3>
              <p>{dest.description}</p>
              <button
                onClick={() => {
                  setSelectedPlace(dest.title);
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
