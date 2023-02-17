import React, { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillBadgeAdFill,
  BsFillBagCheckFill,
  BsFillFileEarmarkBarGraphFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="bg-gray-800 mt-5 lg:px-10">
      <h1 className="text-center font-bold text-4xl text-white py-4">
        Categories
      </h1>
      <p className="text-center mt-2 text-white font-semibold">
        Select a category
      </p>
      <section className="grid grid-cols-2 gap-4 mt-5 bg-gray-800 pb-12">
        <div className="bg-white py-5 flex space-x-2 animate__animated animate__fadeInLeft ml-3 rounded-md items-center justify-center">
          <Link to="/salescopy">
            <a href="#sales-copy" className="">
              <h3 className="text-lg font-bold text-gray-800 flex space-x-2 items-center">
                Sales Copy
                <span className="px-3">
                  <BsFillFileEarmarkBarGraphFill size={25} />
                </span>
              </h3>
            </a>
          </Link>
        </div>
        <div className="bg-white py-5 flex space-x-2 animate__animated animate__fadeInRight mr-3 rounded-md items-center justify-center">
          <Link to="/marketingcopy">
            <a href="#sales-copy" className="">
              <h3 className="text-lg font-bold text-gray-800 flex space-x-2 items-center">
                Marketing Copy
                <span className="px-3">
                  <BsFillEmojiHeartEyesFill size={25} />
                </span>
              </h3>
            </a>
          </Link>
        </div>
        <div className="bg-white px-3 py-5 flex space-x-2 animate__animated animate__fadeInLeft ml-3 rounded-md items-center justify-center">
          <Link to="/adcopy">
            <a href="#sales-copy" className="">
              <h3 className="text-lg font-bold text-gray-800 flex space-x-2 items-center">
                Ad Copy
                <span className="px-3">
                  <BsFillBadgeAdFill size={25} />
                </span>
              </h3>
            </a>
          </Link>
        </div>
        <div className="bg-white px-3 py-5 flex space-x-2 animate__animated animate__fadeInRight mr-3 rounded-md items-center justify-center">
          <Link to="/productcopy">
          <a href="#sales-copy" className="">
            <h3 className="text-lg font-bold text-gray-800 flex space-x-2 items-center">
              Product Description
              <span className="px-3">
                <BsFillBagCheckFill size={25} />
              </span>
            </h3>
          </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Categories;
