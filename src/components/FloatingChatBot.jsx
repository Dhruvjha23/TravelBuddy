import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./FloatingChatBot.css";

export default function FreeFlowChatBot() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    whatsapp: "",
    passengers: "",
    duration: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const questions = [
    { label: "What is your full name?", name: "name", type: "text" },
    { label: "Your email address?", name: "email", type: "email" },
    { label: "Where do you want to travel?", name: "interest", type: "text" },
    { label: "Your WhatsApp number?", name: "whatsapp", type: "text" },
    { label: "How many passengers?", name: "passengers", type: "number" },
    { label: "Trip duration (in days)?", name: "duration", type: "number" }
  ];

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidWhatsApp = (number) =>
    /^\+?\d{10,15}$/.test(number.replace(/\s/g, ""));

  const handleSubmit = async () => {
    const { name, email, interest, whatsapp, passengers, duration } = formData;

    if (!isValidEmail(email)) return alert("❌ Invalid email address.");
    if (!isValidWhatsApp(whatsapp)) return alert("❌ Invalid WhatsApp number.");
    if (isNaN(passengers) || passengers < 1 || passengers > 100)
      return alert("❌ Passengers must be between 1 and 100.");
    if (isNaN(duration) || duration < 1 || duration > 60)
      return alert("❌ Duration must be between 1 and 60 days.");

    const templateParams = {
      name,
      email,
      interest,
      phone: whatsapp,
      passengers,
      duration
    };

    try {
      // 1. Send Email to Admin
      await emailjs.send(
        "service_mjrdyjs",
        "template_5qc3ia5",
        templateParams,
        "Evt3xyoQsz5fms5gW"
      );

      // 2. Send to Google Sheet
      await fetch("https://api.sheetbest.com/sheets/66751e3c-1836-4dc2-8517-3046fd11ede0", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(templateParams)
      });

      // 3. WhatsApp Message
      const msg = `Hi ${name}, thanks for planning your trip with TravelBuddy! ✈️
📍 Destination: ${interest}
👥 Passengers: ${passengers}
📅 Duration: ${duration} days`;

      const waURL = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
      window.open(waURL, "_blank");

      setSubmitted(true);
      setStep(0);
      setFormData({ name: "", email: "", interest: "", whatsapp: "", passengers: "", duration: "" });

      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
      }, 4000);

    } catch (err) {
      console.error("❌ Submission failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          💬 Chat with us
        </button>
      )}

      {isOpen && (
        <div className="chatbox">
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          {submitted ? (
            <div className="confirmation-box">
              <h3>✅ Submitted Successfully!</h3>
              <p>Thank you for reaching out. Our team will contact you soon via Email or WhatsApp. ✈️</p>
            </div>
          ) : (
            <>
              <label>{questions[step].label}</label>
              <input
                type={questions[step].type}
                name={questions[step].name}
                value={formData[questions[step].name]}
                onChange={handleChange}
                required
              />
              <div className="chatbot-buttons">
                {step < questions.length - 1 ? (
                  <button onClick={() => setStep(step + 1)}>Next</button>
                ) : (
                  <button onClick={handleSubmit}>Submit</button>
                )}
                <button onClick={() => setIsOpen(false)} className="cancel-btn">Cancel</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
