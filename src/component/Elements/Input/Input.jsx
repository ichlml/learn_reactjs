import React from "react";

const Input = (props) => {
  const { type, placeholder, name, id } = props;
  return (
    <div>
      <input
        type={`${type}`}
        name={`${name}`}
        id={`${id}`}
        autoComplete="off"
        className="text-sm  border rounded w-full py-2 px3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:px-2 placeholder:opacity-70 placeholder:px-2"
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

export default Input;
