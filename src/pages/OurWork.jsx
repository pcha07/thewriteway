import Categories from "../components/Categories";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OurWork = () => {
  const navigate = useNavigate();

  const onClicked = () => {
    navigate("/contactus");
  };

  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      <Navbar />
      <Introduction />
      <Categories />
      <FeaturedProjects />
      {/* Contact Us */}
      <div className="flex flex-col space-y-6 justify-center my-5 items-center">
        <h1 className="font-bold text-2xl p-2">
          From Concept to Creation: Join Us on a Journey of Innovation and
          Success
        </h1>
        <button
          onClick={onClicked}
          className="bg-primary-600 hover:scale-110 transition ease-in-out text-white font-semibold p-2 px-8 rounded-md"
        >
          Connect With Us
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;
