// import React, { useState } from 'react';

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       name: 'Aman Tiwana - Real Esate',
//       message: 'The Write Way helped me save time by writing my sales copy for me and did a way better job than I ever could have. I highly reccomend The Write Way if you want to save time and see your business grow.',
//     },
//     {
//       name: 'Jason Peters - Autobody Shop',
//       message: 'I was struggling with gaining customers attention and I could not figure out why. The writers at The Write Way explained why having a solid sales copy is a vital part of any business and handeled the entire process. I could not stop reading what they provided me with and saw the results instantly.',
//     },
//     {
//       name: 'Bernice Donalds - E-commerce',
//       message: 'With search engines picking up on AI generated text I needed a team I could trust to genuinly write original content for my business. That is why I trust The Write Way to write my sales and ad copies because they understand how search engines work and helped my business rank higher naturally.',
//       avatar: 'https://via.placeholder.com/150x150'
//     }
//   ];

//   const handlePrevious = () => {
//     setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((currentIndex + 1) % testimonials.length);
//   };

//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-medium mb-10 text-center">
//           Testimonials
//         </h2>
//         <div className="flex items-center justify-center mb-10">
//           <button onClick={handlePrevious} className="bg-primary-700 text-white font-semibold px-5 py-3 rounded-full hover:bg-blue-300">
//             Previous
//           </button>
//           <div className="w-full max-w-md mx-10">
//             <div className="flex flex-col items-center">
//               <p className="text-center text-sm font-medium mb-5">
//                 {testimonials[currentIndex].message}
//               </p>
//               <h3 className="text-lg font-medium">
//                 {testimonials[currentIndex].name}
//               </h3>
//             </div>
//           </div>
//           <button onClick={handleNext} className="bg-primary-700 text-white font-semibold px-5 py-3 rounded-full hover:bg-blue-300">
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "The Write Way helped me save time by writing my sales copy for me and did a way better job than I ever could have. I highly reccomend The Write Way if you want to save time and see your business grow.",
      name: "Aman Tiwana",
      position: "Real Estate Agent",
    },
    {
      quote:
        "I was struggling with gaining customers attention and I could not figure out why. The writers at The Write Way explained why having a solid sales copy is a vital part of any business and handeled the entire process. I could not stop reading what they provided me with and saw the results instantly.",
      name: "Jason Peters",
      position: "Autobody Shop",
    },
    {
      quote:
        "With search engines picking up on AI generated text I needed a team I could trust to genuinly write original content for my business. That is why I trust The Write Way to write my sales and ad copies because they understand how search engines work and helped my business rank higher naturally.",
      name: "Bernice Donalds",
      position: "E-commerce Store",
    },
  ];

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(testimonials.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide === testimonials.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium">What Our Clients Say</h2>
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <button
              className="absolute left-0 -mt-20 hover:text-gray-600"
              onClick={handlePrev}
            >
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 font-medium mb-4">
                {testimonials[currentSlide].quote}
              </p>
              <p className="text-lg font-medium mb-2">
                {testimonials[currentSlide].name}
              </p>
              <p className="text-gray-600 font-medium text-sm">
                {testimonials[currentSlide].position}
              </p>
            </div>
            <button
              className="absolute right-0 -mt-20 hover:text-gray-600"
              onClick={handleNext}
            >
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
