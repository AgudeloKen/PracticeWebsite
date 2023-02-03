import React from "react";
const Laptop = require("../assets/laptop.jpg");

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold uppercase">
            Lorem ipsum dolor sit amet
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Lorem, ipsum.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet
            natus nihil quas velit earum voluptatum, consequatur, deserunt
            assumenda iusto necessitatibus eveniet adipisci, facere est mollitia
            tenetur quod exercitationem ad?
          </p>
          <button className="w-[200px] bg-black rounded-md my-6 mx-auto font-medium :mx-0 px-6 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
