import "animate.css/animate.min.css";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
// animate__animated animate__fadeInDown
import Navbar from "../components/Navbar";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="">
      <Navbar />
      <h1 className="text-gray-800 font-semibold text-2xl animate__animated animate__fadeInDown text-center">
        Thanks For Your Interest!
      </h1>
      <p className="text-gray-800 font-semibold text-center">
        Contact us today so we can help you right away.
      </p>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default ContactUs;
