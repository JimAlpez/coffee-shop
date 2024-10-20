import React from "react";

import About from "../components/About";
import Hero from "../components/Hero";
import Coffees from "../components/Coffees";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About isAboutPage={false} />
      <Coffees/>
      <Testimonials/>
      <Blog/>
      <Contact/>
    </>
  );
};

export default HomePage;
