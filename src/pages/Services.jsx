import Navbar from "../components/Navbar";
import "animate.css/animate.min.css";
import ProductDesc from "../images/shirt.png";
import Ad from "../images/ad.png";
import Sales from "../images/sales1.png";
import MkCopy from "../images/mkCopy.png";
import SocialMgmt from "../images/social-media-mgmt.png";
import Contentmgmt from "../images/content-management.png";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const onClicked = () => {
    navigate("/contactus");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-full overflow-x-hidden flex flex-col space-y-4">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInDown">
            Our Services
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            Welcome to our Services page, where we're dedicated to helping you
            take your brand to the next level. We specialize in crafting
            compelling content that not only captures the essence of your brand
            but also resonates with your target audience.
          </p>
          <h1 className="text-center text-3xl font-semibold text-gray-800 border-b-4 border-gray-800">
            Copywriting
          </h1>
          <div className="grid grid-cols-1 gap-6">
            <section className="bg-white shadow-xl rounded-lg p-6">
              <div class="flex flex-wrap items-center justify-center py-16">
                <div class="w-full md:w-1/2 lg:w-1/3 text-center px-4 mb-8">
                  <img
                    src={Sales}
                    alt="Sales copy icon"
                    class="h-20 w-auto mx-auto mb-4"
                  />
                  <h2 class="text-lg font-medium mb-2">Sales Copy</h2>
                  <p class="">
                    Compelling copy that drives conversions and motivates
                    customers to take action.
                  </p>
                </div>

                <div class="w-full md:w-1/2 lg:w-1/3 text-center px-4 mb-8">
                  <img
                    src={MkCopy}
                    alt="Marketing copy icon"
                    class="h-20 w-auto mx-auto mb-4"
                  />
                  <h2 class="text-lg font-medium mb-2">Marketing Copy</h2>
                  <p class="">
                    Engaging content that generates interest and awareness in
                    your brand.
                  </p>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 text-center px-4 mb-8">
                  <img
                    src={Ad}
                    alt="Ad copy icon"
                    class="h-20 w-auto mx-auto mb-4"
                  />
                  <h2 class="text-lg font-medium mb-2">Ad Copy</h2>
                  <p class="">
                    Compelling messaging specifically designed for use in
                    advertising campaigns.
                  </p>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 text-center px-4 mb-8">
                  <img
                    src={ProductDesc}
                    alt="Product copy icon"
                    class="h-20 w-auto mx-auto mb-4"
                  />
                  <h2 class="text-lg font-medium mb-2">Product Copy</h2>
                  <p class="">
                    Informative and engaging product descriptions that increase
                    sales and conversions.
                  </p>
                </div>
              </div>
            </section>
            <h1 className="text-center text-3xl font-semibold text-gray-800 border-b-4 border-gray-800 mt-5">
              Social Media Management
            </h1>
            <img
              className="w-full h-52 object-contain object-center"
              src={SocialMgmt}
              alt="Your image"
            />
            <section className="bg-white shadow-xl rounded-lg p-6">
              <div class="container mx-auto py-8">
                <p class="mb-8">
                  Let our team of experts handle your social media presence with
                  our easy and effective solution.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div class="p-8 bg-gray-100 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">
                      Consistent and Quality Content
                    </h3>
                    <p class="mb-4">
                      Our team is committed to delivering content that resonates
                      with your brand's voice and reaches your target audience.
                    </p>
                    <p class="mb-4">
                      We'll work with you to develop a social media strategy
                      that aligns with your business goals and objectives.
                    </p>
                  </div>
                  <div class="p-8 bg-gray-100 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">
                      Effortless Social Media Management
                    </h3>
                    <p class="mb-4">
                      Our team will create and publish engaging and relevant
                      posts on your social media channels.
                    </p>
                    <p class="mb-4">
                      We'll take care of all the necessary tasks such as
                      scheduling, monitoring, and responding to comments and
                      messages.
                    </p>
                  </div>
                </div>
                <p class="mt-8">
                  With our social media management service, you can rest assured
                  that your social media presence is in good hands, allowing you
                  to focus on other aspects of your business.
                </p>
              </div>
            </section>
            <h1 className="text-center text-3xl font-semibold text-gray-800 border-b-4 border-gray-800 mt-5">
              Content Strategy
            </h1>
            <img
              className="w-full h-52 object-contain object-center"
              src={Contentmgmt}
              alt="Your image"
            />
            <section className="bg-white shadow-xl rounded-lg p-6">
              <div class="container mx-auto py-8">
                {/* <h2 class="text-3xl font-bold mb-4">
                  Content Creation Service
                </h2> */}
                <p class="mb-8">
                  Let us help you create high-quality content that engages your
                  audience and achieves your business goals.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div class="p-8 bg-gray-100 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">
                      Expertise and Creativity
                    </h3>
                    <p class="mb-4">
                      Our team of expert writers and designers will work with
                      you to create content that's tailored to your brand and
                      resonates with your target audience.
                    </p>
                    <p class="mb-4">
                      We'll bring our creativity and experience to every
                      project, whether it's a blog post, or an infographic,
                    </p>
                  </div>
                  <div class="p-8 bg-gray-100 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">
                      Efficient and Effective Workflow
                    </h3>
                    <p class="mb-4">
                      We'll take care of the entire content creation process,
                      from research and planning to writing and editing.
                    </p>
                    <p class="mb-4">
                      We'll work closely with you to ensure that the content
                      meets your standards and achieves your objectives.
                    </p>
                  </div>
                </div>
                <p class="mt-8">
                  With our content creation service, you can save time and
                  effort while getting high-quality content that represents your
                  brand and engages your audience.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="font-bold text-2xl p-2">
          Ready to Elevate Your Project? Let's Collaborate and Create Something
          Extraordinary!
        </h1>
        <button onClick={onClicked} className="bg-primary-600 hover:scale-110 transition ease-in-out text-white font-semibold py-2 px-8 rounded-md w-[35%]">
          Get In Touch
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
