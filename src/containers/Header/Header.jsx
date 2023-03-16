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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation sticky bg-white z-20 top-0">
      <div className="navigation_wrapper  flex px-[4%] items-center">
        <div className="container flex flex-row justify-between items-center mx-auto py-10 flex-grow flex-shrink w-full">
          <a href="#" className="text-7xl">
            TSC
          </a>
          <button
            className="left-0"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <Close /> : <Open />}
          </button>
          <div
            className={`top-10 right-0 left-0 bottom-0 fixed h-full flex-1 bg-white p-10 ${
              isOpen ? "translate-y-10" : "translate-y-full"
            } ease-in-out duration-700`}
          >
            <nav>
              <ul className="flex flex-col justify-between text-9xl gap-7 mt-6 text-center">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href}>
                    {item.name}
                  </a>
                ))}
              </ul>
            </nav>
            <div className="divider w-[98%] h-[1px] mx-auto mt-20 mb-12 bg-lightGray"></div>
            <div className="links flex flex-row gap-7 justify-between items-center mx-10">
              <div className="icons flex cursor-pointer gap-4">
                <img
                  className=" w-5"
                  src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a84d797a6fb_linkedin.png"
                  alt="linkedin"
                />
                <img
                  className=" w-5"
                  src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44afa9f97a701_instagram.png"
                  alt="instagram"
                />
                <img
                  className=" w-5"
                  src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a02d697a6fd_twiiter.png"
                  alt="facebook"
                />
                <img
                  className=" w-5"
                  src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a1a6697a6f9_twitter.png"
                  alt="twitter"
                />
                <img
                  className=" w-5"
                  src="https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a9a4e97a6ff_dribbble.png"
                  alt="dribble"
                />
              </div>
              <div className="location flex gap-3 cursor-pointer items-center">
                <Location fill="gray" />
                <span className="text-gray">Gujarat, Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  {
    /* <div className="navigation_wrapper relative z-[120] flex px-[4%] items-center bg-white">
        <div className="container relative mx-auto flex-grow flex-shrink max-w-6xl">
          <div className="navigation_grid flex flex-row justify-between items-center">
            <div className="div_flex flex my-5 font-bold  items-center">
              <a
                href="#"
                className="logo_link flex relative text-xl flex-row items-center"
              >
                TSC
              </a>
            </div>
            <div className="flex_wrapper flex items-center">
              <div className="hamburger_menu relative z-[110] flex w-20 h-20 justify-center items-center cursor-pointer">
                <div className="animation_image">
                  <img
                    src="https://assets.website-files.com/6315d6de2357050021f26e96/631897d04465046247898725_add_FILL0_wght300_GRAD0_opsz48%20(2).svg"
                    alt="menu_open"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
  }
};

export default Header;
