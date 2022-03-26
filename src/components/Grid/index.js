import Cell from "components/Cell";
import React from "react";

const Grid = ({ handleClickCell, getCellInput }) => {
  const renderCell = (positionOrder) => {
    return (
      <div className="flex w-80 h-24">
        {Array.from({ length: 3 }, (_, i) => i + positionOrder).map((num) => (
          <Cell
            key={num}
            order={num}
            text={getCellInput(num)}
            handleClickCell={handleClickCell}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-80">
      {renderCell(0)}
      {renderCell(3)}
      {renderCell(6)}
    </div>
  );
};

export default Grid;
