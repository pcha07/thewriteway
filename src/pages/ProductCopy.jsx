import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Candle from "../images/candle.jpeg";
import Bottle from "../images/waterbottle.jpeg";
import Seat from "../images/babyseat.jpeg";
import Bracelet from "../images/bracelet.jpeg";

const AdCopy = () => {
  const projects = [
    {
      id: 1,
      title: "Scented Candle",
      image: Candle,
      description:
        "Bring the essence of nature into your home with our scented candles. Infused with the finest essential oils, each candle is crafted to evoke a sense of calm and relaxation. Whether you're unwinding after a long day or setting the mood for a romantic evening, our candles provide the perfect ambiance. Choose from a range of heavenly scents, including lavender, vanilla, rose, and many more. Each candle is made with natural soy wax, ensuring a clean and long-lasting burn. Plus, with our stylish and reusable glass jars, these candles make the perfect gift for any occasion. Light one up and let the soothing aroma fill your space – you'll be transported to a world of peace and tranquility in no time!",
    },
    {
      id: 2,
      title: "Runners Water bottle",
      image: Bottle,
      description:
        "Stay hydrated on the go with our wrist-wrapped water bottle, designed specifically for runners. Whether you're pounding the pavement or hitting the trails, this innovative water bottle will keep you hydrated without weighing you down. With a flexible, wrist-wrapped design, it provides easy access to your drink without having to stop or slow down. The leak-proof cap ensures you don't have to worry about spills or drips, and the lightweight material makes it the perfect companion for even the longest of runs. Whether you're a seasoned runner or just starting out, this water bottle is an essential tool for staying hydrated and performing at your best. Order yours today and experience the difference for yourself!",
    },
    {
      id: 3,
      title: "Baby Seat",
      image: Seat,
      description:
        "Travel with peace of mind and keep your little one safe and secure with our premium baby car seat. Designed to provide the ultimate protection for your child, this seat features advanced safety technologies such as adjustable headrests and a five-point harness. The plush, breathable fabric ensures your baby stays comfortable during even the longest of car rides, while the easy-to-install design makes it a breeze to get in and out of the car. Whether you're running errands or taking a road trip, this car seat is the perfect choice for parents who value safety, comfort, and ease of use. With its sleek and stylish design, it will also make a great addition to your car's interior. Order yours today and experience the best baby car seat on the market!",
    },
    {
      id: 4,
      title: "Leather Bracelet",
      image: Bracelet,
      description:
        "Elevate your style with our sleek and sophisticated leather bracelet. Crafted from the finest materials, this bracelet is both durable and comfortable to wear. With a range of colors and styles to choose from, you can easily find the perfect bracelet to match your personal taste. Whether you're looking for a statement piece to wear on its own or a subtle accessory to complete your look, this bracelet is the perfect choice. The secure magnetic clasp ensures it stays securely in place, while the premium leather material ensures it will last for years to come. Order yours today and add a touch of sophistication to your wardrobe!",
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
          Product Descriptions
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
        Get Your Personalized Product Description
      </h1>
      <button className="p-2.5 bg-primary-600 text-white w-[20%] mx-auto rounded-md font-semibold hover:scale-105 transition ease-in-out">
        Contact Us
      </button>
      <Footer />
    </div>
  );
};

export default AdCopy;
