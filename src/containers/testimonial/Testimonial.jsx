"use client";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
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
  const [currentItem, setCurrentItem] = useState(0);

  const navigateCard = (direction) => {
    if (direction === "prev" && currentItem > 0) {
      setCurrentItem(currentItem - 1);
    } else if (direction === "next" && currentItem < data.length - 1) {
      setCurrentItem(currentItem + 1);
    }
  };
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex transition duration-[1s] ease-in-out"
        style={{ transform: `translateX(-${currentItem * 20}%)` }}
      >
        {data.map((item) => (
          <TestimonialCard {...item} key={item.id} />
        ))}{" "}
      </div>
      <div className="carousel-navigation flex justify-center mt-5">
        <button className="prev-button" onClick={() => navigateCard("prev")}>
          Prev
        </button>
        <button className="next-button" onClick={() => navigateCard("next")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
