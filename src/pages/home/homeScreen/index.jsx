import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
// import { NavItem } from "react-bootstrap";

export default function Home() {
  return (
    <>
      {/* <NavItem /> */}
      <Navbar />
      <HeroSection />
      {/* <MySkills /> */}
      <AboutMe />
      {/* <MyPortfolio /> */}
      {/* <Testimonials /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
