import Accordian from "@/components/Accordian/Accordian";
import React from "react";

const accordian = [
  {
    id: 1,
    text: "Can I use Kofo before paying?",
    paragraph:
      "Nam at tortor in tellus interdum sagittis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed cursus turpis vitae tortor.",
  },
  {
    id: 2,
    text: "Are aron sites SEO-friendly?",
    paragraph:
      "Praesent ac massa at ligula laoreet iaculis. Sed cursus turpis vitae tortor. Curabitur vestibulum aliquam leo. Pellentesque posuere. Cras sagittis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam eu nunc. Morbi ac felis.. Mauris turpisnunc ligula.",
  },
  {
    id: 3,
    text: "How to create a new website?",
    paragraph:
      "Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.",
  },
  {
    id: 4,
    text: "We need to add new users to our team?",
    paragraph:
      "Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.",
  },
  {
    id: 5,
    text: "How do i pay to start a new website?",
    paragraph:
      "Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.",
  },
];

const FAQ = () => {
  return (
    <div className="faq">
      <div className="container relative z-[1] mx-auto max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex flex-col my-7 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] w-full">
        <div className="items-center">
          <h2 className="flex justify-center">Frequently asked</h2>
          <h2 className="flex justify-center">questions</h2>
        </div>
        <div className="flex flex-col items-start mx-32">
          {accordian.map((item) => (
            <Accordian key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
