import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import React from "react";

const data = [
  {
    id: 1,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6317426cb417e779ec15be2b_icons8-school-director-256%20(2).png",
    title: "Graphic Design",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/63174377e79d9d53b1e0ea02_icons8-laptop-and-phone-256%20(1).png",
    title: "Development",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  return (
    <div className="px-container items-center justify-center pb-20 relative z-[1] flex flex-col gap-10 min-h-screen">
      <h3 className="mt-3 text-4xl">
        We worry about the details so you don't have to. When you work with our
        web agency, you can be certain that your website meets every standard.
      </h3>

      <div className="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-1 xl:grid-cols-3 gap-8 lg:gap-4">
        {data.map((item) => (
          <PortfolioCard key={item.id} {...item} />
        ))}

        <img
          className="object-cover overflow-hidden"
          src="https://assets.website-files.com/6315d6de2357050021f26e96/631743540533da71eeb889f3_photo-2-p-500.jpg"
          alt="portfolio_image"
        />
      </div>
    </div>
  );
};

export default Services;
