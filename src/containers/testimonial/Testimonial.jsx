"use client";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import clsx from "clsx";
import { Mina } from "next/font/google";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
  {
    id: 2,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
  {
    id: 3,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
  {
    id: 4,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
  {
    id: 5,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
  {
    id: 6,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
  {
    id: 7,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
  {
    id: 8,
    paragraph:
      "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    testimonialName: "John Doe",
    companyName: "John Doe",
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705cb86f26f35_user-4.jpeg",
    rating: {
      rate: 5,
    },
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [card, setCard] = useState(true);

  const style = {
    main: {
      transform: `translateX(-${currentSlide * 37}%)`,
    },
    Opt: {
      transform: `translateX(-${currentSlide * 112}%)`,
    },
  };

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  console.log("currentSlide:", currentSlide);
  return (
    <div className="w-full overflow-hidden my-8   snap-x">
      <div
        className={
          "flex transition duration-[1s] ease-in-out gap-10 lg:pl-96 py-6 snap-center"
        }
        // style={{ transform: `translateX(-${currentSlide * 30}%)` }}

        style={window.innerWidth > 768 ? style.main : style.Opt}
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className={clsx(
              "opacity-100 flex grow shrink-0 w-screen  md:w-[460px] p-9  bg-lightGray snap-center",
              {
                "opacity-40": currentSlide !== index,
              }
            )}
          >
            <TestimonialCard {...item} key={item.id} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        {data.map((slide, index) => (
          <div
            className={
              index === currentSlide
                ? "bg-black w-2.5 h-2.5 border  cursor-pointer mx-2 my-0 rounded-[50%] border-solid  border-[#333]"
                : " w-2.5 h-2.5 border  cursor-pointer mx-2 my-0 rounded-[50%] border-solid  border-[#333]"
            }
            key={index}
            onClick={() => handleBulletClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

// w-2.5 h-2.5 border  cursor-pointer mx-2 my-0 rounded-[50%] border-solid  border-[#333]
// transform: `translateX(-${currentSlide * 35}%)`
