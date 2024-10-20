import React from "react";
import CoffeeCard from "./Card/Coffee";

const Coffees = () => {
  return (
    <div className="max-w-[1110px] w-11/12 mx-auto my-28 text-center space-y-10">
      <h2 className="secondary-heading">Our Coffee Offer</h2>
      <div className="flex gap-5">
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </div>
  );
};

export default Coffees;
