import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const socialIcons = [
  {
    label: <FaFacebookF />,
    link: "#",
  },
  {
    label: <FaTwitter />,
    link: "#",
  },
  {
    label: <FaLinkedinIn />,
    link: "#",
  },
  {
    label: <FaInstagram />,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="text-white text-center">
      <div className="bg-black py-20 space-y-5">
        <div className="flex items-center justify-center gap-2">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              className="text-xl h-12 w-12 rounded-full grid place-content-center border-2 border-white">
              {icon.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 !mt-12">
          <a href="#" className="flex items-center gap-2 text-sm">
            <IoMdCall />
            +01 1234567890
          </a>
          <a href="#" className="flex items-center gap-2 text-sm">
            <FaEnvelope />
            demo@gmail.com
          </a>
        </div>

        <form className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Your Email"
            className="bg-transparent text-white border border-white/30 focus:border-white px-4 py-2 outline-none w-full max-w-[400px]"
          />
          <button className="text-xl bg-primary h-[42px] w-[42px] grid place-content-center outline-none">
            <FaArrowRight />
          </button>
        </form>
      </div>
      <div className="bg-primary p-4 text-sm">
        <p>2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
