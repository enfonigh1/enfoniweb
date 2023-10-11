import React from "react";

const NewInput = ({ name, type, label, onChange, value }) => {
  return (
    <div>
      <label for="email" class="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div class="mt-2">
        <input
          id="email"
          name={name}
          type={type}
          required
          onChange={onChange}
          value={value}
          class="block w-full rounded-md border-0 p-3 mb-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default NewInput;
