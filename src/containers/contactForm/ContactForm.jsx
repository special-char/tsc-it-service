import { getFormDetails } from "@/lib/getFormDetails";
// import { use } from "react";

import DynamicForm from "@/components/DynamicForm/DynamicForm";

// type Props = {};

const ContactForm = async () => {
  const formDetails = await getFormDetails(1);

  // console.log(formDetails);

  const fields = formDetails.data?.attributes?.fields;

  const submitUrl = formDetails.data?.attributes?.submitURL;

  // console.log(fields);

  return (
    <div className="contact__body">
      <DynamicForm fields={fields} submitUrl={submitUrl} />
    </div>
  );
};

export default ContactForm;
