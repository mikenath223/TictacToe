import { WINNING_POSITIONS } from "constant";

export const checkWin = (filledPositions, currentPlayer) => {
  const filtPlayerPositions = Object.entries(filledPositions).filter(
    (pos) => pos[1] === currentPlayer
  );
  const objFiltPlayerPositions = Object.fromEntries(filtPlayerPositions);
  let isWinnerFound = false;
  WINNING_POSITIONS.forEach((pos) => {
    if (!isWinnerFound) {
      isWinnerFound = pos.every((posInner) => objFiltPlayerPositions[posInner]);
    }
  });

  return isWinnerFound;
};
