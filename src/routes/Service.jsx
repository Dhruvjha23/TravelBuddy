import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/img5.jpg";
import PopularDestinations from "../components/PopularDestinations";
import TopTravelExperiences from "../components/TopTravelExperiences";
import HeritageCulture from "../components/HeritageCulture";
import Footer from "../components/Footer";
export default function Contact() {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={ServiceImg}
        title="Our Services"
        btnClass="hide"
      />

        <PopularDestinations/>
        <TopTravelExperiences/>
        <HeritageCulture/>
        <Footer/>
        </>
    )
}