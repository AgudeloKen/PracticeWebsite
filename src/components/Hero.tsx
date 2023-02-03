import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] h-screen w-full m-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Lorem ipsum dolor sit amet.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Lorem ipsum dolor sit.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, in.
        </p>
        <button className="w-[200px] bg-[#00df9a] font-medium rounded-md my-6 mx-auto px-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
