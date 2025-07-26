import { useState } from "react";
import { motion } from "framer-motion";
import "./SectionStyles.css";
import BookingModal from "./BookingModal";

import Trekking from "../assets/trekking.jpg";
import Houseboat from "../assets/houseboat.jpg";
import DesertSafari from "../assets/desert-safari.jpg";
import RiverRafting from "../assets/river-rafting.jpg";
import HotAirBalloon from "../assets/balloon.jpg";
import WildlifeSafari from "../assets/safari.jpg";
import Ayurveda from "../assets/ayurveda.jpg";
import SnowCamping from "../assets/snowcamp.jpg";

const experiences = [
  { title: "Trekking", image: Trekking, description: "Himalayan treks & trails." },
  { title: "Houseboat Stay", image: Houseboat, description: "Float on Kerala backwaters." },
  { title: "Desert Safari", image: DesertSafari, description: "Ride through Thar desert." },
  { title: "River Rafting", image: RiverRafting, description: "Thrill in Rishikesh." },
  { title: "Hot Air Balloon", image: HotAirBalloon, description: "Jaipur aerial view." },
  { title: "Wildlife Safari", image: WildlifeSafari, description: "Spot tigers & more." },
  { title: "Ayurveda Retreat", image: Ayurveda, description: "Rejuvenate in nature." },
  { title: "Snow Camping", image: SnowCamping, description: "Sleep under snowy skies." },
];

export default function TopTravelExperiences() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-wrapper">
      <h2>Top Travel Experiences</h2>
      <div className="section-grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="section-card experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={exp.image} alt={exp.title} />
            <div className="card-content">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <button
                onClick={() => {
                  setSelectedPlace(exp.title);
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
