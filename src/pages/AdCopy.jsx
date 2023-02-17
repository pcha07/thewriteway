import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StoreSale from "../images/storesale.jpeg";
import GymMemb from "../images/gymmemb.jpeg";
import ComedyShow from "../images/comedyshow.jpeg";
import Soap from "../images/soap.jpeg";

const AdCopy = () => {
  const projects = [
    {
      id: 1,
      title: "Clothing Store Sale",
      image: StoreSale,
      description:
        "Nourish your skin with nature's goodness! Introducing our all-natural soap bars, made with the finest ingredients straight from the earth. Say goodbye to harsh chemicals and hello to a healthy, glowing complexion. Each bar is carefully crafted with love to give you a luxurious and invigorating shower experience. Pamper yourself with the scent of lavender, invigorate with the zing of peppermint, or rejuvenate with the calming scent of lemongrass. Try our natural soap bars today and experience the difference for yourself!",
    },
    {
      id: 2,
      title: "Summer Gym Membership",
      image: GymMemb,
      description:
        "Get fit for summer! With our summer gym membership, you'll have access to all the equipment you need to reach your fitness goals. Whether you're looking to build muscle, improve your endurance, or simply stay active, we've got you covered. Our state-of-the-art facilities offer a wide range of cardio and strength-training equipment, as well as a variety of group fitness classes. And with our friendly, knowledgeable staff on hand to provide guidance and support, you'll be well on your way to a healthier, happier summer. Join now and make this your best summer yet!",
    },
    {
      id: 3,
      title: "Comedy Club Show",
      image: ComedyShow,
      description:
        "Laugh out loud this weekend! Come join us for a night of non-stop laughter and good times at our comedy show. With a lineup of the funniest comedians in town, you're guaranteed a night to remember. Whether you're looking for a fun date night idea, or just want to blow off some steam with friends, this is the perfect opportunity. Sit back, relax, and let our comedians take care of the rest. Get your tickets now and brace yourself for a night filled with sidesplitting jokes, rib-tickling humor, and all-around good vibes. Don't miss out on the funniest show in town!",
    },
    {
      id: 4,
      title: "Natural Soap",
      image: Soap,
      description:
        "Shop 'til you drop! Get ready for a sale like no other, as our entire clothing store goes on sale for a limited time only. From tops to bottoms, dresses to accessories, you'll find everything you need to update your wardrobe at unbeatable prices. Whether you're looking for casual, comfortable styles for everyday wear, or elegant, eye-catching pieces for special occasions, we've got you covered. With so many styles to choose from, there's something for everyone. So why wait? Head to our store now and take advantage of these amazing discounts while they last! Stock up on your favorite pieces and enjoy huge savings on fashion you'll love!",
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
          Advertisement Copies
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
        Get Your Personalized Ad Copy
      </h1>
      <button className="p-2.5 bg-primary-600 text-white w-[20%] mx-auto rounded-md font-semibold hover:scale-105 transition ease-in-out">
        Contact Us
      </button>
      <Footer />
    </div>
  );
};

export default AdCopy;
