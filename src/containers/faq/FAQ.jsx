import Accordian from "@/components/Accordian/Accordian";
import React from "react";

const accordian = [
  {
    id: 1,
    text: "Can I use Kofo before paying?",
  },
  {
    id: 2,
    text: "Are aron sites SEO-friendly?",
  },
  {
    id: 3,
    text: "How to create a new website?",
  },
  {
    id: 4,
    text: "We need to add new users to our team?",
  },
  {
    id: 5,
    text: "How do i pay to start a new website?",
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="self-center">
        <h2 className="flex justify-center">Frequently asked</h2>
        <h2 className="flex justify-center">questions</h2>
      </div>
      <div className="flex flex-col items-start gap-5 mr-[500px] ml-[300px]">
        {accordian.map((item) => (
          <Accordian key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
