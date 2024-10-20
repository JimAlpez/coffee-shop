import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import Logo from "../assets/Logo.png"

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Coffees",
    link: "/coffees",
  },
  {
    label: "Shop",
    link: "/shop",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const location = useLocation(); // Get the current route
  const [menu, setMenu] = useState("Home");

  // Update the menu state based on the current location pathname
  useEffect(() => {
    const currentPath = location.pathname;
    const currentMenu =
      links.find((link) => link.link === currentPath)?.label || "Home";
    setMenu(currentMenu);
  }, [location.pathname]); // Runs when the route changes

  return (
    <header className={`text-white ${menu === "Home" ? "" : "bg-black"}`}>
      <div className="max-w-[1110px] w-11/12 mx-auto flex items-center gap-5 justify-between py-5">
        <Link
          to={"/"}
          onClick={() => setMenu("Home")}
          className="">
          <img src={Logo} width={60} alt="Coffee Logo" />
        </Link>
        <div className="flex items-center gap-10">
          <nav className="hidden sm:block">
            <ul className="flex flex-wrap items-center justify-center uppercase">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    onClick={() => setMenu(link.label)}
                    className={`px-4 py-3 ${
                      menu === link.label
                        ? "border-b-2 border-primary text-primary"
                        : ""
                    }`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <Link
              to={"#"}
              className="flex items-center gap-2 button-primary px-5 py-2">
              <IoPersonSharp />
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
