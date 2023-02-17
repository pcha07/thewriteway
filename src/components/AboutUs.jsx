import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const onClicked = () => {
    navigate("/aboutus")
  }
  return (
    <div class="bg-gray-900 text-white py-12 flex flex-col">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4">About The Write Way.</h2>
        <p class="text-xl mb-8">
          Our team of experienced and multi-lingual copywriters is dedicated to
          driving business success through the art of language. We offer a
          comprehensive suite of copywriting services, including SEO writing,
          sales copy, marketing copy, ad copy, and real estate copy. With a
          solid history of achievement, we are confident in our ability to craft
          compelling and impactful copy that will help your business achieve its
          objectives. Whether you need copy in English, Spanish, French, or any
          other language, we've got you covered.
        </p>
        <div className="flex justify-center">
          <button onClick={onClicked} className="bg-primary-600 hover:scale-110 transition ease-in-out text-white font-semibold py-2 px-8 rounded-md">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
