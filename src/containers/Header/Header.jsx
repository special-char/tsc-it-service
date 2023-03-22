"use client";
import clsx from "clsx";
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
    <>
      <header className="px-container flex fixed w-full items-center justify-between z-50">
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
      </header>
      <nav
        className={clsx(
          "fixed flex flex-col h-screen inset-0 bg-white z-40 ease-in-out delay-100 duration-700 translate-y-0",
          {
            "-translate-y-full": !isOpen,
          }
        )}
      >
        <ul className="flex flex-1 flex-col text-3xl lg:text-7xl 2xl:text-9xl cursor-pointer gap-7 text-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                className="hover:text-slateBlue hover:duration-[0.5s]"
                href={item.href}
              >
                {item.name}{" "}
              </a>
            </li>
          ))}
        </ul>
        <div className=" mx-8 h-[1px] mt-7 mb-12 bg-lightGray"></div>
        <div className=" flex flex-col lg:flex-row gap-7 justify-between items-center mx-10">
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
      </nav>
    </>
  );
};

export default Header;
