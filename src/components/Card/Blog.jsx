import React from "react";

import Blog1 from "../../assets/Coffee1.png";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="w-full shadow-md shadow-black/40 border border-black-40 relative">
      <span className="absolute top-0 left-0 text-white bg-primary px-5 py-3 uppercase font-semibold">
        05 April
      </span>
      <img src={Blog1} alt="" className="w-full" />
      <div className="py-6 px-8 space-y-3">
        <h4 className="text-xl uppercase font-extrabold">Types of coffees</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam
          veritatis recusandae adipisci quibusdam consectetur sed quaerat quod
          provident, ullam ducimus a saepe natus velit ratione consequatur
          voluptate rerum reprehenderit?
        </p>
      </div>

      <div className="!my-8 text-center">
        <Link to={"#"} className="button-dark px-6 py-3">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
