import ContactDetailsPage from "@/components/ContactDetaisPage/ContactDetailsPage";
import { getContactHeaderData } from "@/lib/getContactHeaderData";
import React from "react";
import Location from "../location/Location";

const ContactDetails = async () => {
  const data = await getContactHeaderData("Contact");

  return (
    <>
      <ContactDetailsPage data={data} />
      <Location />
    </>
  );
};

export default ContactDetails;
