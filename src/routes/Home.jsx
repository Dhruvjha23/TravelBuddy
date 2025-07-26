import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from '../assets/img2.jpg';
import PopularDestinations from "../components/PopularDestinations";
import TopTravelExperiences from "../components/TopTravelExperiences";
import HeritageCulture from "../components/HeritageCulture";
import Footer from "../components/Footer"

export default function Home() {
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={HomeImg}
        title="Start Your Journey"
        text="choose your dream destination"
        buttonText="Travel Catalogue"
        url="#popular-destinations"
        btnClass="show"/>

        <PopularDestinations/>
        <TopTravelExperiences/>
        <HeritageCulture/>
        <Footer/>
        </>
    )
}
