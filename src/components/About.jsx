import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../assets/AboutImage.jpg";

const About = ({ isAboutPage }) => {
  return (
    <div className="max-w-[1110px] w-11/12 mx-auto flex gap-5 text-gray-700 my-28">
      <div className="w-1/2 space-y-5">
        <h2 className="secondary-heading">About Our shop</h2>
        <h3 className="text-4xl">Unforgettable Experience</h3>
        <p>
          We believe that great coffee is more than just a drink—it's an
          experience. Located in the heart of the community, our mission is to
          serve carefully crafted coffee in a warm and welcoming atmosphere.
          Every cup we brew is made with passion, from ethically sourced beans,
          ensuring a perfect balance of flavor and sustainability.
        </p>
        {isAboutPage && (
          <>
            <p>
              Whether you’re starting your day, meeting up with friends, or
              simply looking for a quiet space to unwind, we’re here to make
              every visit special. Our skilled baristas are dedicated to
              delivering personalized service and delicious drinks, from bold
              espressos to smooth lattes and everything in between.
            </p>
            <p>
              Come in, grab a cup, and be a part of our growing community of
              coffee lovers!
            </p>
          </>
        )}
        {!isAboutPage && (
          <div className="!mt-10">
            <Link to={"/about"} className="button-primary px-8 py-4">
              Read More
            </Link>
          </div>
        )}
      </div>
      <div className="w-1/2">
        <img src={AboutImage} alt="About the Coffee Shop" />
      </div>
    </div>
  );
};

export default About;
