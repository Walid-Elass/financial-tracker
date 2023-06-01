import React from "react";

const Button = ({ color, bgColor, size, text, borderRadius, logoutFunc, className }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} ${className} p-3 hover:drop-shadow-xl`}
      onClick={logoutFunc}
    >
      {text}
    </button>
  );
};

export default Button;
