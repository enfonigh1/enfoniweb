import React from "react";

const Input = ({
  label,
  logo,
  type,
  autoFocus,
  name,
  onChange,
  value,
  required,
}) => {
  return (
    <div className="flex justify-center items-center border-solid border-2 border-gray-600/20 h-14 p-3 rounded-lg mb-4">
      <div className="mx-3">
        <img src={logo} alt="" className="h-5" />
      </div>
      <div className="h-8 w-0.25 bg-gray-600/10 mr-2"></div>
      <div className="leading-3">
        <label htmlFor="" className="text-xs font-bold pb-0 mb-0 text-gray-400">
          {label}
        </label>
        <input
          type={type}
          className="w-full border-none focus:outline-none pt-0 mt-0 text-xs font-bold"
          autoFocus={autoFocus}
          name={name}
          onChange={onChange}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
