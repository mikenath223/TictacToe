import React from "react";

const Cell = ({ text, order, handleClickCell }) => {
  return (
    <span
      className="w-1/3 h-full bg-green-100 text-6xl border-4 cursor-pointer flex items-center justify-center font-titan"
      onClick={() => {
        !text && handleClickCell(order);
      }}
    >
      {text}
    </span>
  );
};

export default Cell;
