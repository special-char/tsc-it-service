

const Button = ({ text }) => {
  return <div className="button flex justify-start">
  <button className="py-4 px-6 items-center rounded-md text-base text-dimGray bg-gainsboro font-bold">{text}</button>
</div>;
};

export default Button;
