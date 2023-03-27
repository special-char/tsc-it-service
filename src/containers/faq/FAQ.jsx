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
    <div className="px-container min-h-screen flex flex-col gap-16 pb-20">
      <h2 className="text-5xl flex flex-wrap lg:text-8xl xl:text-9xl justify-center">
        Frequently asked questions
      </h2>

      <div className="flex flex-col px-28">
        {accordian.map((item) => (
          <Accordian key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
