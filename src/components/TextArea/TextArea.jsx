import clsx from "clsx";
import React from "react";

// type Props = { label: string } & React.DetailedHTMLProps<
//   React.TextareaHTMLAttributes<HTMLTextAreaElement>,
//   HTMLTextAreaElement
// >;

const TextArea = ({
  field,
  form: { touched, errors },
  label,
  wrapperClass,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx("form__group", {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      {/* <label className="form__group__label">{label}</label> */}
      <textarea
        className="form__group__textarea  border-spacing-2 w-full m-1 border-[#e1e1e1] border p-4 ml-1 rounded-md "
        {...field}
        {...rest}
        
        
      ></textarea>
      {touched[field.name] && errors[field.name] && (
        <p className="form__group__error">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default TextArea;
