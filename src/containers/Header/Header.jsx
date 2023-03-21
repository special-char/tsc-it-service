"use client";
import React, { useState } from "react";
import Open from "../../../public/icons/open.svg";
import Close from "../../../public/icons/close.svg";
import Location from "../../../public/icons/location.svg";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "NEWS", href: "/blogs" },
  { name: "CONTACT", href: "/contact" },
];

const socialIcons = [
  {
    id: 1,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a84d797a6fb_linkedin.png",
    alt: "linkedin",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44afa9f97a701_instagram.png",
    alt: "instagram",
  },
  {
    id: 3,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a02d697a6fd_twiiter.png",
    alt: "facebook",
  },
  {
    id: 4,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a1a6697a6f9_twitter.png",
    alt: "twitter",
  },
  {
    id: 5,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a9a4e97a6ff_dribbble.png",
    alt: "dribble",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation sticky bg-white z-20 top-0">
      <div className="container flex flex-row justify-between items-center mx-auto max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-5 flex-grow flex-shrink w-full">
        <h1 href="#" className="text-7xl cursor-pointer">
          TSC
        </h1>
        <button
          className="left-0 hover:bg-slateBlue hover:rounded-full p-4 hover:duration-[0.8s] hover:ease-in-out"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <Close /> : <Open />}
        </button>
        <div
          className={`top-10 right-0 left-0 bottom-0 fixed h-full flex-1 bg-white p-10 ${
            isOpen ? "translate-y-20" : "translate-y-full"
          } ease-in-out duration-700`}
        >
          <nav>
            <ul className="flex flex-col justify-between text-3xl lg:text-7xl 2xl:text-9xl cursor-pointer gap-7 text-center">
              {navItems.map((item) => (
                <a
                  className="hover:text-slateBlue hover:duration-[0.5s]"
                  key={item.name}
                  href={item.href}
                >
                  {" "}
                  {item.name}{" "}
                </a>
              ))}
            </ul>
          </nav>
          <div className="divider w-[98%] h-[1px] mx-auto mt-7 mb-12 bg-lightGray"></div>
          <div className="links flex flex-col lg:flex-row gap-7 justify-between items-center mx-10">
            <div className="icons flex cursor-pointer gap-4">
              {socialIcons.map((item) => (
                <img className="w-5" key={item.id} {...item} />
              ))}
            </div>
            <div className="location flex gap-3 cursor-pointer items-center">
              <Location fill="gray" />
              <span className="text-gray">Gujarat, Ahmedabad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
