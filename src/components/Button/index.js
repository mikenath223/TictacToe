import React from "react";

const Button = ({ text, onClick, disabled, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-teal-300 px-3 py-1 rounded-md text-white font-medium ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
