import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/img3.jpg";
import Footer from "../components/Footer"

export default function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
      <section className="about-main">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            Travel Buddy is your trusted partner for planning unforgettable travel
            experiences. Whether you’re seeking serene beaches, adventurous
            mountain hikes, or cultural city explorations, we bring together
            curated destinations, personalized itineraries, and inspiration to help
            you plan with confidence.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
}
