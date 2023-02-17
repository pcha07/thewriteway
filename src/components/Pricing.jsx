import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const onClicked = () => {
    navigate("/contactus");
  };
  return (
    <div className="bg-green-200 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
        <div className="flex flex-col md:mx-4 gap-4">
          <div className="w-full px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Single Copy</h3>
              <p className="text-xl mb-4">
                If you're looking to convey your message with clarity and
                purpose, our single copywriting plan can help. This plan offers
                a single piece of high-quality copywriting with up to 2 rounds
                of revisions to ensure that it meets your needs and exceeds your
                expectations.
              </p>
              <p className="text-xl mb-4">
                <strong>Price: $30</strong>
              </p>
            </div>
          </div>
          <div className="w-full px-4 mb-6 md:mb-0">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Copywriting & Social Media Management Package
              </h3>
              <p className="text-xl mb-4">
                We'll work closely with you to create a content strategy that
                speaks directly to your target audience and aligns with your
                brand voice. Our expert copywriters will create high-quality
                content that engages your audience and helps you stand out in a
                crowded digital landscape.
              </p>
              <p className="text-xl mb-4">
                {" "}
                Meanwhile, our social media managers will manage your social
                media accounts, posting regular updates, responding to comments
                and messages, and growing your social media presence. With our
                package, you can be confident that your copywriting and social
                media needs are taken care of, so you can focus on running your
                business.
              </p>
              <p className="text-xl mb-4">
                <strong>Price: $50 - $110/month</strong>
              </p>
            </div>
          </div>
          <div className="w-full px-4 mb-6 md:mb-0">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                All-inclusive Marketing Package
              </h3>
              <p className="text-xl mb-4">
                Struggling to get noticed online and connect with your target
                audience? Our all-inclusive marketing plan can help. We combine
                copywriting, social media management, and content strategy to
                help you build a strong online presence and achieve your
                marketing goals.
              </p>
              <p className="text-xl mb-4">
                We work closely with you to develop a customized marketing plan
                that aligns with your business objectives. Our expert team
                creates engaging content that resonates with your audience and
                manages your social media accounts. We develop a content
                strategy that helps you achieve success.
              </p>
              <p className="text-xl mb-4">
                <strong>Price: $125-$325/month</strong>
              </p>
            </div>
          </div>
          <div className="w-full px-4 mb-6 md:mb-0">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Custom Plan</h3>
              <p className="text-xl mb-4">
                At our marketing business, we understand that every client is
                unique, which is why we offer custom plans designed to meet your
                specific needs. If you feel that our standard plans don't quite
                fit your needs, we're happy to work with you to create a custom
                plan that aligns with your business objectives.
              </p>
              <p className="text-xl mb-4">
                Whether you need a combination of our copywriting, social media
                management, and content strategy services, or you're looking for
                something completely different, our team of experts is here to
                help. We'll work closely with you to develop a plan that meets
                your needs and helps you achieve your marketing goals. Contact
                us today to learn more about how we can create a custom plan
                that's tailored to your unique needs.
              </p>
              {/* <p className="text-xl mb-4">
                <strong>Contact us to talk about an individualized plan</strong>
              </p> */}
            </div>
          </div>
        </div>
        <div className="px-4 mt-4">
          <button
            onClick={onClicked}
            className="p-2 bg-primary-600 text-white font-semibold rounded-md w-[40%] hover:scale-105 transition ease-in-out text-lg shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
