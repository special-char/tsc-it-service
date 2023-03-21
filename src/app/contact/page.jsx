import ContactDetails from "@/containers/contactDetails/ContactDetails";
import FAQ from "@/containers/faq/FAQ";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container relative z-[1] mx-auto flex flex-col my-7 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full">
        <ContactDetails />
        <FAQ />
      </div>
    </div>
  );
};

export default Contact;
