import React from "react";
import Card from "./Card";
const Single = require("../assets/single.png");
const Double = require("../assets/double.png");
const Triple = require("../assets/triple.png");

const images: string[] = [Single, Double, Triple];
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {images.map((image, i) => {
          return <Card image={image} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
