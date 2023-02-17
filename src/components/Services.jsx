import "animate.css/animate.min.css";
import SEO from "../images/seo.png";
import Ad from "../images/ads.png";
import Sales from "../images/sales2.png";
import DigitalCamp from "../images/digital-campaign.png";
import { Link, useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const onClicked = () => {
    navigate("/services")
  }

  return (
    <div className="max-w-screen p-5 bg-gray-900 flex flex-col items-center justify-center space-y-4">
      <h3 className="text-center mb-4 text-2xl rounded-md font-semibold text-white animate__animated animate__fadeInDown">
        Discover the Wide Range of Services We Offer to Meet Your Needs
      </h3>
      <section class="bg-white py-16 rounded-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
            <div class="bg-gray-100 rounded-lg shadow-lg p-8">
              <div class="mx-auto flex items-center justify-center h-20 w-20">
                <img src={SEO} alt="" />
              </div>
              <h3 class="mt-6 text-center text-xl font-semibold text-gray-900">
                Original Content That Ranks For SEO
              </h3>
              <p class="mt-4 text-center text-gray-600">
                Improve your search engine rankings and drive targeted traffic
                to your website with The Write Way's SEO content. Our team of
                experts uses the latest best practices and a research-based
                approach to craft informative, relevant content that resonates
                with your audience and boosts your online visibility. Trust us
                to deliver top-quality content that helps your business succeed.
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-lg p-8">
              <div class="mx-auto flex items-center justify-center h-20 w-20">
                <img src={Ad} alt="" />
              </div>
              <h3 class="mt-6 text-center text-xl font-semibold text-gray-900">
                Boost Ad Conversions
              </h3>
              <p class="mt-4 text-center text-gray-600">
                Maximize your advertising efforts and see real results with our
                professional copywriting services. Our team of experts will
                craft compelling ad copy that targets the right keywords,
                ensuring that your campaigns reach the right audience and
                deliver the return on investment you desire. Don't let subpar
                copy hinder the growth of your business - invest in our services
                and watch your success soar.
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-lg p-8">
              <div class="mx-auto flex items-center justify-center h-20 w-20">
                <img src={Sales} alt="" />
              </div>
              <h3 class="mt-6 text-center text-xl font-semibold text-gray-900">
                Boost Your Sales
              </h3>
              <p class="mt-4 text-center text-gray-600">
                Maximize the impact of your words with our expert copywriting
                services. Our team understands the power of persuasive,
                compelling content, and we use this knowledge to drive
                conversions and help you achieve your goals. From increasing
                sales to promoting new products to generating leads, our sales
                copy is designed to deliver results and help your business
                succeed.
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-lg p-8">
              <div class="mx-auto flex items-center justify-center h-20 w-20">
                <img src={DigitalCamp} alt="" />
              </div>
              <h3 class="mt-6 text-center text-xl font-semibold text-gray-900">
                Transform Your Marketing
              </h3>
              <p class="mt-4 text-center text-gray-600">
                Effective marketing copy is crucial for building a strong brand
                voice and personality. At The Write Way, we are dedicated to
                crafting the best content to help your business stand out from
                the competition and create a unique, memorable brand identity.
                Whether you're launching a new product or looking to refresh
                your marketing strategy, we are here to help you promote your
                brand effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div></div>
      <button onClick={onClicked} className="p-2 bg-primary-600 text-white font-semibold rounded-md w-[50%] hover:scale-105 transition ease-in-out text-lg">
        Explore Our Solutions
      </button>
    </div>
  );
}
