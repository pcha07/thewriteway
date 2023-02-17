import React from "react";
import "animate.css/animate.min.css";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 animate__animated animate__fadeInDown sm:text-4xl lg:text-5xl mt-4">
        Our Portfolio
      </h1>
      <p className="text-lg text-gray-800 mt-4 animate__animated animate__fadeInUp sm:text-xl lg:text-2xl text-center">
        Welcome to our portfolio page, where we showcase our sales, ad, and marketing copywriting
        work. Our team of experts are dedicated to delivering high-quality copy
        that drives results.
      </p>
    </div>
  );
};

export default Introduction;
