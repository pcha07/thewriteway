import Header from "../components/Navbar";
import Intro from "../components/Intro";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div className="">
      <Header />
      <Intro />
      <Services />
      <AboutUs />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
