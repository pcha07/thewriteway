import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Physio from "../images/physio.jpeg";
import Golf from "../images/golfcourse.jpeg";
import Detailing from "../images/detailing.jpeg";
import Greek from "../images/greekrest.jpeg";

const MarketingCopy = () => {
  const projects = [
    {
      id: 1,
      title: "Physiotherapy Clinic",
      image: Physio,
      description:
        "Revitalize Your Body, Renew Your Life with Our Physiotherapy Clinic!Say goodbye to pain and hello to a new lease on life with our expert physiotherapists. With personalized treatment plans and cutting-edge techniques, we help you reclaim your mobility and vitality. Whether you're recovering from an injury, managing a chronic condition, or simply looking to improve your overall wellness, we're here to help. Don't let pain hold you back any longer. Book your appointment today and experience the transformative power of physiotherapy!",
    },
    {
      id: 2,
      title: "Golf Course",
      image: Golf,
      description:
        "Escape to the Green and Tee Off in Paradise at Our Golf Course!Whether you're a seasoned pro or a beginner, our golf course offers the perfect combination of challenge and relaxation. With pristine fairways, well-manicured greens, and breathtaking scenery, every round is a memorable experience. And with top-notch amenities and friendly staff, you'll feel like royalty from the moment you arrive. So why wait? Book your tee time now and experience golf at its finest!",
    },
    {
      id: 3,
      title: "Car Detailing Business",
      image: Detailing,
      description:
        "Bring Your Car Back to Life with Our Expert Detailing Services! Your car is more than just a mode of transportation – it's a reflection of you. So why settle for less than the best? At our car detailing business, we use the latest techniques and top-quality products to restore your car to its original glory. From a simple wash to a full interior and exterior detail, we've got you covered. Trust us to bring your car back to life and make you feel proud every time you get behind the wheel. Book your appointment today!",
    },
    {
      id: 4,
      title: "Greek Restaurant",
      image: Greek,
      description:
        "Indulge in a Taste of Greece at Our Authentic Greek Restaurant! Embark on a culinary journey to the sunny shores of Greece with every bite. Our expert chefs use only the freshest ingredients and traditional recipes to bring the flavors of the Mediterranean to your table. From succulent gyros to flaky spanakopita, every dish is a celebration of the rich culinary heritage of Greece. And with a warm, inviting atmosphere and friendly staff, you'll feel like you're dining in the heart of Athens. Treat yourself to a taste of Greece – book your table now!",
    },
  ];

  const [readMore, setReadMore] = useState({});

  const toggleReadMore = (id) => {
    setReadMore({ ...readMore, [id]: !readMore[id] });
  };

  return (
    <div className="flex flex-col space-y-4">
      <Navbar />
      <section className="p-6 mt-5">
        <h2 className="text-3xl font-bold text-center text-gray-900 animate__animated animate__fadeInDown">
          Marketing Copies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded p-6 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">
                {readMore[project.id]
                  ? project.description
                  : project.description.slice(0, 100) + "..."}
              </p>
              <button
                className="text-blue-500 underline hover:text-blue-800"
                onClick={() => toggleReadMore(project.id)}
              >
                {readMore[project.id] ? "Show less" : "Read more"}
              </button>
            </div>
          ))}
        </div>
      </section>
      <h1 className="text-center text-xl font-semibold">
        Get Your Personalized Marketing Copy
      </h1>
      <button className="p-2.5 bg-primary-600 text-white w-[20%] mx-auto rounded-md font-semibold hover:scale-105 transition ease-in-out">
        Contact Us
      </button>
      <Footer />
    </div>
  );
};

export default MarketingCopy;
