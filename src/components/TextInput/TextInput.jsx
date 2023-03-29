import clsx from "clsx";
import React from "react";

// type Props = {
//   label: string;
//   wrapperClassName: string;
// } & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
  field,
  form: { touched, errors },
  label,
  wrapperClass,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx("form__group ", {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      {/* <label className="form__group__label">{label}</label> */}
      <input
        type="text"
        className={clsx("form__group__input border-spacing-2 w-full border-[#e1e1e1] border p-4 rounded-md m-2", {
          "border border-error outline-error border-spacing-2 w-full border-black": !!(
            touched[field.name] && errors[field.name]
          ),
        })}
        {...field}
        {...rest}
      />
      {touched[field.name] && errors[field.name] && (
        <p className="form__group__error mx-3 ">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default TextInput;
