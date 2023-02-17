import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Competence from "../images/competence.png";
import Values from "../images/values.png";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const onClicked = () => {
    navigate("/contactus");
  }
  return (
    <div className="w-full h-full overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="mx-auto max-w-7xl p-3">
        <section className="bg-gray-100 py-16">
          <div className="px-4">
            <h2 className="text-3xl font-bold mb-8">
              Our Experience in Copywriting
            </h2>
            <p className="text-lg leading-7 text-gray-600">
              At the heart of our business lies a deep passion and extensive
              expertise in the art of crafting compelling content. Every project
              we undertake receives our unwavering commitment to excellence,
              from ideation to execution, to ensure that every piece of the
              puzzle is precisely crafted to achieve your desired outcome. Allow
              us to leverage our expertise and passion to elevate your brand and
              exceed your expectations.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaCheckCircle className="text-green-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Copywriting</h3>
                  <p className="text-gray-600 mt-2">
                    We provide high-quality copywriting services for businesses
                    of all sizes. Our copywriters are experts in crafting
                    compelling copy that resonates with your target audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CgWebsite className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Website Copywriting</h3>
                  <p className="text-gray-600 mt-2">
                    We specialize in writing website copy that engages your
                    audience and converts visitors into customers. Our website
                    copywriting services include SEO optimization to improve
                    your search engine rankings.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiHeart className="text-red-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Content Strategy</h3>
                  <p className="text-gray-600 mt-2">
                    Our copywriters can help you develop a content strategy that
                    aligns with your business goals and resonates with your
                    target audience. We can assist you with everything from blog
                    posts to social media content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Captivate Your Audience with Copy That Converts: Our Words, Your
              Success
            </h2>
            <img src={Competence} alt="" className="h-20 w-auto mx-auto mb-4" />
            <p className="text-lg leading-7 text-gray-600">
              We're committed to helping you captivate your audience and achieve
              business success through effective content that converts. We
              combine our exceptional talent for engaging and inspiring writing
              with a deep understanding of your target market. We'll work
              closely with you to create customized solutions that fit your
              brand's unique needs, from attention-grabbing headlines to
              persuasive calls-to-action. With our words, we can transform your
              brand and drive meaningful results. Let us bring our expertise to
              your next project.
            </p>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Our Values and Philosophy
            </h2>
            <img src={Values} alt="" className="h-20 w-auto mx-auto mb-4" />
            <p className="text-lg leading-7 text-gray-600 mb-8">
              Our values and philosophy are the foundation of everything we do.
              We believe that great copy should not only capture the essence of
              your brand and resonate with your audience, but also reflect the
              highest standards of ethics and professionalism. With a deep
              commitment to integrity, transparency, and collaboration, we work
              tirelessly to ensure that every project we undertake exceeds your
              expectations and drives the success of your business. Whether you
              are a startup or an established brand, we are dedicated to helping
              you achieve your goals with copy that truly stands out. Let us
              show you the power of our values and philosophy and transform the
              way you connect with your audience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <AiOutlineUser className="text-purple-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Customer Focus</h3>
                  <p className="text-gray-600 mt-2">
                    Our copywriting business's success is measured by our
                    customers' success. Our focus is on driving conversions,
                    boosting engagement, and building brand awareness to help
                    you achieve your business goals. We take pride in providing
                    high-quality work, exceptional attention to detail, and
                    outstanding customer service. Allow us to transform your
                    brand's success story with our expertise in crafting copy
                    that truly resonates with your audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MdEmail className="text-red-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Transparency</h3>
                  <p className="text-gray-600 mt-2">
                    Our copywriting business values transparency in both our
                    processes and pricing. We prioritize clear communication and
                    meeting expectations by collaborating closely with clients,
                    providing frequent updates, and straightforward pricing. Our
                    commitment to transparency also includes ethical and honest
                    business practices, as we strive to foster lasting
                    relationships built on mutual trust and respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Target Audiences</h2>
            <p className="text-lg leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis arcu vitae orci bibendum, id tincidunt eros
              tristique. Donec non risus urna.
            </p>
          </div>
        </section> */}

        <section className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Unlock Your Brand's Potential: Let Us Help You Stand Out
            </h2>
            {/* <p className="text-lg leading-7 text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec ante vitae risus elementum placerat. Nullam bibendum mauris et
              semper sollicitudin. Proin eget semper libero. Nullam vel velit
              auctor, molestie ex nec, aliquam leo.
            </p> */}

            <div className="flex justify-center">
              <button onClick={onClicked} className="bg-primary-600 hover:scale-110 transition ease-in-out text-white font-medium py-2 px-8 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
