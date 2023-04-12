"use client";
import React, { useState } from "react";
import Open from "../../../public/icons/open.svg";
import Location from "../../../public/icons/location.svg";
import clsx from "clsx";
import Image from "next/image";
import SVG from "../SVG/SVG";

// const navItems = [
//   { id: 1, name: "HOME", href: "/" },
//   { id: 2, name: "ABOUT", href: "/about" },
//   { id: 3, name: "NEWS", href: "/blogs" },
//   { id: 4, name: "CONTACT", href: "/contact" },
// ];

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

const HeaderPage = ({ data, socialMedia }) => {
  // const headerPage = data?.data?.data?.menusMenu?.data;
  const headerPage = data?.data?.menusMenu?.data?.attributes;
  // console.log(
  //   "HeaderPage data:",
  //   data?.data?.menusMenu?.data?.attributes?.title
  // );

  const socialMediaIcons =
    socialMedia?.data?.contactDetail?.data?.attributes?.socialMedia;
  // console.log(
  //   "socialMedia data::",
  //   socialMedia?.data?.contactDetail?.data?.attributes?.socialMedia
  // );

  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return (
    <>
      <header className="px-container flex sticky top-0 w-screen items-center justify-between z-50 bg-white py-5">
        <h1 className="text-7xl cursor-pointer">
          {" "}
          <a href="#"> {headerPage?.title}</a>
        </h1>
        <button
          className="left-0 hover:bg-slateBlue hover:rounded-full p-4 duration-[0.8s] ease-in-out"
          onClick={toggleOpen}
        >
          <Open
            className={clsx(" duration-200", {
              "transform rotate-45": isRotated,
            })}
          />
        </button>
      </header>

      <nav
        className={clsx(
          "fixed flex flex-col h-screen z-40 inset-0 bg-white ease-in-out duration-500 -translate-y-full",
          {
            "translate-y-0": isOpen,
          }
        )}
      >
        <ul className="flex flex-1 flex-col pt-20 text-5xl lg:text-7xl 2xl:text-9xl justify-center gap-6 text-center">
          {headerPage?.items?.data.map((x) => {
            return (
              <li key={x.id}>
                <a
                  className="hover:text-slateBlue hover:duration-[0.5s] cursor-pointer"
                  href={x?.attributes?.url}
                  data={x}
                >
                  {x?.attributes?.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className=" flex flex-col gap-7  lg:flex-row justify-center lg:justify-between pb-5 lg:px-4 border-t-2 border-lightGray mx-4 pt-8 items-center">
          <div className="icons flex justify-start cursor-pointer gap-6">
            {socialMediaIcons.map((item, index) => {
              // console.log("item::", item?.icon?.data?.attributes?.url);
              // return <SVG url={item?.icon?.data?.attributes?.url} />;
              return (
                <img
                  key={index}
                  className="w-7 h-7"
                  src={item?.icon?.data?.attributes?.url}
                  alt="social_media"
                  data={item}
                />
              );
            })}
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

export default HeaderPage;
