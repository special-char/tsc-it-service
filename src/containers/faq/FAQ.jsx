import Accordian from "@/components/Accordian/Accordian";
import { getFaqData } from "@/lib/getFaqData";
import React from "react";

const accordian = [
  {
    id: 1,
    question: "Can I use Kofo before paying?",
    answer:
      "Nam at tortor in tellus interdum sagittis. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed cursus turpis vitae tortor.",
  },
  {
    id: 2,
    question: "Are aron sites SEO-friendly?",
    answer:
      "Praesent ac massa at ligula laoreet iaculis. Sed cursus turpis vitae tortor. Curabitur vestibulum aliquam leo. Pellentesque posuere. Cras sagittis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam eu nunc. Morbi ac felis.. Mauris turpisnunc ligula.",
  },
  {
    id: 3,
    question: "How to create a new website?",
    answer:
      "Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.",
  },
  {
    id: 4,
    question: "We need to add new users to our team?",
    answer:
      "Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.",
  },
  {
    id: 5,
    question: "How do i pay to start a new website?",
    answer:
      "Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.",
  },
];

const FAQ = async () => {
  const data = await getFaqData();
  const faqsData = data?.data?.faqs?.data;
  // console.log("getFaqData:", data?.data?.faqs?.data);

  return (
    <div className="px-container min-h-screen flex flex-col gap-16 pb-20">
      <h2 className="text-5xl flex flex-wrap lg:text-8xl xl:text-9xl justify-center">
        Frequently asked questions
      </h2>

      <div className="flex flex-col px-32">
        {faqsData.map((item) => (
          <Accordian key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
