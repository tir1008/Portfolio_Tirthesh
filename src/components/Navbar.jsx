import React, { useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, logo_favicon } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center ml-0 gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo_favicon}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Tirthesh<span className="sm:block">| Software and ML Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li key={0}
              className={`text-secondary hover:text-white text-[18px]
            font-medium cursor-pointer`}><Link to="https://drive.google.com/file/d/1CXyhmcjr7s4WAb1Wh_pYDXhLSz99VWeH/view?usp=drive_link" onClick={(e) => {
              e.preventDefault();
              window.open('https://drive.google.com/file/d/1CXyhmcjr7s4WAb1Wh_pYDXhLSz99VWeH/view?usp=drive_link', '_blank', 'noopener,noreferrer');
            }}>Resume</Link></li>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px]
            font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div
          className="sm:hidden flex flex-1 
        justify-end items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
          object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute
            top-20 right-0 mx-4 my-2 min-w-[140px]
            z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px]
            font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
