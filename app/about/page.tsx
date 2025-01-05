/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div id="about">
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="flex flex-col md:flex-row md:mt-0 mt-6 justify-center items-center w-full md:w-auto space-y-4 md:space-y-0">
          <div className="md:hidden block text-center text-custom-purple">
            A brand built on the love of craftsmanship, quality, and outstanding customer service
          </div>
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
          <div className="md:hidden block text-center text-custom-purple mt-4">
            Join the club and get the benefits
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-between px-4 py-16 gap-x-4">
        {/* Text Section */}
        <div className="bg-custom-purple flex items-center justify-center w-full md:w-1/2 h-[400px] text-white p-8 md:p-16">
          <div>
            <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
            <p className="mt-6">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014.
            </p>
            <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
              View Collection
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-[400px]">
          <img
            src="/images/About main.png"
            alt="About main"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 gap-x-8 space-y-8 md:space-y-0">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center">
          <img
            src="/images/About second.png"
            alt="Service"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
        {/* Text Section */}
        <div className="border-2 bg-slate-200 w-full md:w-1/2 h-[400px] p-8 md:p-20 flex flex-col justify-center">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
        </div>
      </div>

      {/* Difference Section */}
      <div className="flex flex-col items-center w-full py-16 bg-gray-50">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          What makes our brand different
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl px-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-white p-8 shadow-md rounded-md w-full">
            <h2 className="text-lg font-semibold text-gray-800">Next day as standard</h2>
            <p className="text-gray-600 mt-2">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-white p-8 shadow-md rounded-md w-full">
            <h2 className="text-lg font-semibold text-gray-800">Made by true artisans</h2>
            <p className="text-gray-600 mt-2">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-white p-8 shadow-md rounded-md w-full">
            <h2 className="text-lg font-semibold text-gray-800">Unbeatable prices</h2>
            <p className="text-gray-600 mt-2">
              For our materials and quality, you won’t find better prices anywhere.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center text-center bg-white p-8 shadow-md rounded-md w-full">
            <h2 className="text-lg font-semibold text-gray-800">Recycled packaging</h2>
            <p className="text-gray-600 mt-2">
              We use 100% recycled to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-custom-purple h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
