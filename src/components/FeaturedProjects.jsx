import React, { useState } from "react";
import RealEstate from "../images/real_estate.png";
import Truck from "../images/whitef150.jpeg";
import RestAd from "../images/restad.jpeg";
import Blanket from "../images/blanket.jpeg";
import "animate.css/animate.min.css";


const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Home Marketing Copy",
      image: RealEstate,
      description: "Nestled in the heart of a beautiful hillside neighbourhood, this luxurious 4-bedroom, 5-bathroom home is a true gem. From the moment you step inside, you will be wowed by the open concept modern design that seamlessly blends indoor and outdoor spaces. The spacious and well-lit living room boasts large windows that let in an abundance of natural light, highlighting the high-end finishes and premium materials used throughout the home.The gourmet kitchen is a chef's dream come true, featuring top-of-the-line appliances, ample counter space, and a large island perfect for food prep or casual dining. The adjacent dining room provides the perfect setting for formal gatherings and special occasions.Retreat to one of the four spacious bedrooms, each featuring its own en-suite bathroom, providing a sense of privacy and luxury. The master suite is a true oasis, with a large walk-in closet, spa-like bathroom, and private balcony with breathtaking views.But the highlight of this home is undoubtedly the spacious backyard, complete with a sparkling pool, beautiful landscaping, and ample space for outdoor entertaining and relaxation. Whether you're sunbathing, hosting a summer barbeque, or simply enjoying a quiet evening under the stars, you'll feel like you're on a permanent vacation.This is a rare opportunity to own a piece of paradise in one of the most sought-after neighbourhoods in the area. With its prime location, luxury features, and endless possibilities for outdoor living, this home is a must-see. Schedule a viewing today and start living your dream life tomorrow.",
    },
    {
      id: 2,
      title: "Used Truck Sales Copy",
      image: Truck,
      description:
        "Get behind the wheel of a rugged and reliable pickup truck with this gently used 2020 Ford F-150. Boasting a sleek white finish, this vehicle is in excellent condition with low mileage, providing the ideal blend of style and functionality.This truck is equipped with a powerful engine and advanced technology, ensuring a smooth and comfortable ride every time. With ample cargo space, you'll have all the room you need to transport your gear, equipment, or leisure toys with ease. Whether you're on the job or exploring the great outdoors, this truck is up to the task.Inside, you'll find a comfortable and spacious cabin that is designed to meet your every need. From the convenient touchscreen infotainment system to the advanced safety features, this truck offers everything you could want in a vehicle.Don't miss your chance to own this fantastic used 2020 Ford F-150. With its low mileage, great condition, and unbeatable value, this truck won't last long. Schedule a test drive today and experience the power and versatility of this impressive vehicle for yourself.",
    },
    {
      id: 3,
      title: "Restaurant Ad Copy",
      image: RestAd,
      description:
        "Indulge in a dining experience like no other at Spice Odyssey. From the moment you step through our doors, you'll be transported to a world of flavors, aromas, and good times. Our menu features a carefully crafted selection of dishes that are made with the freshest ingredients, ensuring that every bite is a taste sensation.Whether you're in the mood for a romantic dinner for two, a night out with friends, or a family gathering, our warm and inviting atmosphere is the perfect setting. And, with a diverse range of dishes to choose from, there's something for everyone.Don't miss out on the fun - follow us on Instagram and stay up-to-date with all the latest news and events from [Restaurant Name]. And, be sure to share your dining experiences with us using the hashtag #SpiceOdyssey.See you soon! 🍴🍷",
    },
    {
        id: 4,
        title: "Blanket Product Description",
        image: Blanket,
        description:
          "Bring comfort and style to your home with this cozy and fluffy blanket. Perfect for snuggling up on the couch, this blanket will keep you warm and comfortable all year round.Made from premium materials, this blanket features a soft and luxurious texture that will make you want to stay snuggled up forever. Its generously sized design means you can easily wrap yourself up in its warmth, no matter your height.With its affordable price, this blanket is the perfect addition to your bed or couch. Whether you're lounging at home or traveling, this blanket will keep you warm and comfortable wherever you go.So why wait? Order your own fluffy blanket today and start enjoying the ultimate in comfort and style.",
      },
  ];

  const [readMore, setReadMore] = useState({});

  const toggleReadMore = (id) => {
    setReadMore({ ...readMore, [id]: !readMore[id] });
  };

  return (
    <section className="p-8 mt-5">
      <h2 className="text-3xl font-bold text-center text-gray-900">Featured Projects</h2>
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
  );
};

export default FeaturedProjects;
