import React from "react";

const Button = ({ color, bgColor, size, text, borderRadius, actionFunc, className }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} ${className} px-10 py-2 hover:drop-shadow-xl`}
      onClick={actionFunc}
    >
      {text}
    </button>
  );
};

export default Button;
