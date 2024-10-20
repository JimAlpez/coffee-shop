import React from "react";
import Background from "../assets/Background.png";

const Hero = () => {
  return (
    <div className="min-h-[537px] text-white flex items-center">
      <img
        className="absolute top-0 -z-10 h-[650px] w-full object-cover"
        src={Background}
        alt="Coffees"
      />
      <div className="max-w-[1110px] w-11/12 mx-auto space-y-8">
        <h1 className="text-8xl font-extrabold leading-[0.9]">
          <span className="text-primary">Coffee</span>
          <br /> Shop
        </h1>
        <p className="max-w-[500px] italic">
          "Where every cup is brewed with passion. Join us for a moment of
          warmth and relaxation."
        </p>
        <div className="flex items-center gap-3">
          <a href="#about" className="button-primary px-8 py-3">
            About Us
          </a>
          <a href="tel:1234567890" className="button-transparent px-8 py-3">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
