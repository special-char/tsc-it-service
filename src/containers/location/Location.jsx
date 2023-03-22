import ContactCard from "@/components/ContactCard/ContactCard";
import React from "react";

const content = [
  {
    id: 1,
    city: "London",
    address: "14 New South Head Rd,Triple Bay 3148 London, UK",
    btnText: "Find on Map",
  },
  {
    id: 2,
    city: "New York",
    address: "14 New South Head Rd,Triple Bay 3148 London, UK",
    btnText: "Find on Map",
  },
  {
    id: 3,
    city: "Paris",
    address: "14 New South Head Rd,Triple Bay 3148 London, UK",
    btnText: "Find on Map",
  },
];

const Location = () => {
  return (
    <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 md:grid-rows-none xl:mt-32">
      {content.map((item) => (
        <ContactCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Location;
