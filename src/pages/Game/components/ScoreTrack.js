import React from "react";

const ScoreTrack = ({ player, score, isCurrentPlayer, symbol, gameOver }) => {
  return (
    <div
      className={`flex flex-col items-center w-24 ${
        isCurrentPlayer && !gameOver ? "bg-indigo-400" : "bg-indigo-200"
      } p-2 rounded`}
    >
      <span>{player}</span>
      <span className="font-titan text-lg text-orange-600">{symbol}</span>
      <span className="font-display text-2xl">{score}</span>
    </div>
  );
};

export default ScoreTrack;
