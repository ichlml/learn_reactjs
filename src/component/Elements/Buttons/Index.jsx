import React from "react";

const Button_elements = ({
  props,
  colorText,
  text,
  onClick = () => {},
  type = "button",
}) => {
  const colors = {
    red: "bg-red-500 hover:bg-red-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    green: "bg-green-500 hover:bg-green-700",
  };

  const warna = {
    white: "text-white",
    red: "text-green-700",
  };

  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md ${
        warna[colorText] || "text-gray-700"
      } ${colors[props] || "bg-gray-500 hover:bg-gray-700"}`}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button_elements;
