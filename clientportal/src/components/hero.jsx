import React from "react";

const Hero = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-16">
      <div className="flex md:justify-around gap-8 flex-wrap  items-center">
        <div className="space-y-8 max-w-xl ">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight">
            Set yourself apart from your competitors by giving your clients a
            professional, organized client portal.
          </h1>
          <div className="flex flex-wrap gap-4 ">
            <button className="bg-[#E31B54] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90">
              Buy Now
            </button>
          </div>
        </div>

        <div className="">
          <img
            src="/cl.png"
            alt="Client Portal Preview"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
