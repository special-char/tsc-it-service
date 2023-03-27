// import { getFormDetails } from '@/lib/getFormDetails';
// import { use } from "react";

import DynamicForm from "@/components/DynamicForm/DynamicForm";

// type Props = {};

const ContactForm = ({ fields, submitUrl }) => {
  // const formDetails = use(getFormDetails(1));

  // if (!formDetails) {
  //   throw new Error(
  //     "something went wrong! try refreshing the page or please come back later."
  //   );
  // }

  // const fields = formDetails.data?.attributes?.fields;

  // const submitUrl = formDetails.data?.attributes?.submitURL as string;

  return (
    <div className="contact__body">
      <DynamicForm fields={fields} submitUrl={submitUrl} />
    </div>
  );
};

export default ContactForm;
