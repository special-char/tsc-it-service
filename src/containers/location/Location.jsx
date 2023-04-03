import ContactCard from "@/components/ContactCard/ContactCard";
import { getLocationData } from "@/lib/getLocationData";
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

const Location = async () => {
  const data = await getLocationData();
  const locationData = data?.data?.contactDetail?.data?.attributes?.addresses;
  // console.log(
  //   "locationData:",
  //   data?.data?.contactDetail?.data?.attributes?.addresses
  // );
  return (
    <div className="px-container pb-32 flex justify-center gap-4 items-center">
      {locationData.map((item) => (
        <ContactCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Location;
