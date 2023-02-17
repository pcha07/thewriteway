import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "animate.css/animate.min.css";
import CherryJam from "../images/cherryjam.jpeg";
import SkiGoggles from "../images/skigoggles.jpeg";
import WindowCleaning from "../images/windowcleaning.jpeg";
import GymEquip from "../images/gmyequip.jpeg";
import "animate.css/animate.min.css";
import Footer from "../components/Footer";
import Categories from "../components/Categories";


const SalesCopy = () => {
  const projects = [
    {
      id: 1,
      title: "Natural Cherry Jam",
      image: CherryJam,
      description:
        "Indulge in the sweet, juicy essence of summer with our Fresh Lapin Cherry Jam. Made with hand-picked, ripe cherries, this delicacy is bursting with flavor in every spoonful. Perfect on toast, mixed into yogurt, or as a topping for your favorite desserts, this jam is sure to add a touch of sophistication to your breakfast table. Try it today and taste the difference of fresh, natural ingredients",
    },
    {
      id: 2,
      title: "Premium Ski Goggles",
      image: SkiGoggles,
      description:
        "Introducing the ultimate ski goggles for the ultimate ski experience. Our premium ski goggles are designed for the adventurous skier who wants the best protection and comfort on the slopes.Crafted with the latest technology, our ski goggles feature a polarized lens that eliminates glare, enhances color and contrast, and provides 100% UV protection. The lens is made from durable polycarbonate, ensuring that it can withstand the toughest conditions and impacts.The comfortable and flexible frame is made from a soft silicone material that conforms to your face, providing a snug and secure fit. The adjustable strap ensures that the goggles stay in place, even during the most intense runs.Whether you're facing harsh, sunny days or low-light conditions, our ski goggles are equipped with interchangeable lenses, allowing you to quickly and easily switch out lenses to match the weather and lighting conditions.Our premium ski goggles also have a sleek, stylish design that will have you looking good while you shred the slopes.Experience the best ski experience with our premium ski goggles. Invest in quality and protection today!",
    },
    {
      id: 3,
      title: "Window Cleaning Tool",
      image: WindowCleaning,
      description:
        "Say goodbye to dangerous and time-consuming ladder work! Our window cleaning pole tool is the solution you've been looking for.Designed with the professional cleaner in mind, this pole tool is made from durable, lightweight aluminum and extends to a maximum of 18 feet, giving you easy access to hard-to-reach windows without ever having to leave the ground.The ergonomic handle provides a comfortable grip, reducing hand fatigue during extended use, and the quick-release mechanism allows you to change out the cleaning heads with ease.This window cleaning pole tool is also versatile and can be used for a variety of cleaning tasks, including gutter cleaning, window washing, and more.Don't settle for subpar cleaning tools. Upgrade to our window cleaning pole tool today and enjoy a safer, more efficient cleaning experience!",
    },
    {
      id: 4,
      title: "All In One Gym Trainer",
      image: GymEquip,
      description:
        "Transform your home gym with our multifunctional pulley strength machine! This all-in-one machine provides a full-body workout, delivering results that you can see and feel.With adjustable resistance levels and multiple cable attachments, this machine offers over 100 exercises to target every muscle group. Whether you're looking to build strength, increase flexibility, or simply tone your muscles, this machine has got you covered.The compact design and easy-to-use features make it simple to set up and use in your own home, without taking up too much space. The sturdy construction and high-quality materials ensure durability and long-lasting performance.Get the results you want with the convenience of a home gym. Experience the versatility and power of our multifunctional pulley strength machine today!",
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
          Sales Copies
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
      <h1 className="text-center text-xl font-semibold">Get Your Personalized Sales Copy</h1>
      <button className="p-2.5 bg-primary-600 text-white w-[20%] mx-auto rounded-md font-semibold hover:scale-105 transition ease-in-out">Contact Us</button>
      <Footer/>
    </div>
  );
};

export default SalesCopy;
