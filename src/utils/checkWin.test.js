import { checkWin } from "./checkWin";
import { PLAYER1, PLAYER2 } from "constant";

describe("Test check win util function", () => {
  test("check Player1 wins", () => {
    const filledPositions = {
      0: "Player 1",
      1: "Player 2",
      2: "Player 2",
      4: "Player 1",
      8: "Player 1",
    };
    const currentPlayer = PLAYER1;
    const isPlayer1Winner = checkWin(filledPositions, currentPlayer);
    expect(isPlayer1Winner).toBeTruthy();
  });

  test("check Player2 wins", () => {
    const filledPositions = {
      0: "Player 1",
      1: "Player 2",
      2: "Player 1",
      3: "Player 2",
      4: "Player 2",
      6: "Player 1",
      7: "Player 2",
      8: "Player 1",
    };
    const currentPlayer = PLAYER2;
    const isPlayer2Winner = checkWin(filledPositions, currentPlayer);
    expect(isPlayer2Winner).toBeTruthy();
  });

  test("check round ends in draw", () => {
    const filledPositions = {
      0: "Player 2",
      1: "Player 2",
      2: "Player 1",
      3: "Player 1",
      4: "Player 2",
      5: "Player 2",
      6: "Player 2",
      7: "Player 1",
      8: "Player 1",
    };
    const currentPlayer = PLAYER2;
    const isWinnerExist = checkWin(filledPositions, currentPlayer);
    expect(isWinnerExist).toBeFalsy();
  });
});
