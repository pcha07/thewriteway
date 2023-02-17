import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-10">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-medium mb-4">The Write Way</h3>
            <p className="text-sm">
              Maximize your results with our proven professional strategies.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/">
                <a className="underline hover:text-gray-400">
                  Home
                </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/ourwork">
                <a className="underline hover:text-gray-400">
                  Examples
                </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services">
                <a className="underline hover:text-gray-400">
                  Services
                </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/aboutus">
                <a className="underline hover:text-gray-400">
                  About Us
                </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contactus">
                <a className="underline hover:text-gray-400">
                  Contact Us
                </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col">
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="underline hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="underline hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="underline hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="underline hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">Copyright &copy; The Write Way 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
