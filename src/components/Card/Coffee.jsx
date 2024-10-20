import React from "react";
import { Link } from "react-router-dom";

import Coffee1 from "../../assets/Coffee1.png";

const CoffeeCard = () => {
  return (
    <div className="text-white rounded-md overflow-hidden">
      <img src={Coffee1} alt="" className="w-full" />
      <div className="px-12 py-6 bg-black/90 space-y-3 text-center">
        <h4 className="text-2xl uppercase font-extrabold">Types of coffees</h4>
        <p>Lorem, ipsum dolor sit amet.</p>
        <div className="!my-8">
          <Link to={"#"} className="button-transparent px-6 py-3">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
