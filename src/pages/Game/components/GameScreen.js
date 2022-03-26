import React, { useState, useEffect } from "react";
import Grid from "components/Grid";
import { INITIALSCORES, PLAYER1, PLAYER2, PLAYERS } from "constant";
import { checkWin } from "utils/checkWin";
import ScoreTrack from "./ScoreTrack";
import Button from "components/Button";
import Header from "components/Header";

const getRandomPlayer = () => {
  const randomOrder = Math.floor(Math.random() * 1);
  return PLAYERS[randomOrder];
};

const GameScreen = ({ playerNames }) => {
  const [filledPositions, setFilledPositions] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState(getRandomPlayer());
  const [gameOver, setGameOver] = useState(false);
  const [noWinner, setNoWinner] = useState(false);
  const [scores, setScores] = useState(INITIALSCORES);

  useEffect(() => {
    if (Object.keys(filledPositions).length === 9 && !gameOver) {
      setGameOver(true);
      setNoWinner(true);
    }
  }, [filledPositions, gameOver]);

  const updateCurrentPlayer = () => {
    const nextPlayer = currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
    setCurrentPlayer(nextPlayer);
  };

  const handleGameOver = () => {};

  const handleClickCell = (cellOrder) => {
    const newPositions = {
      ...filledPositions,
      [cellOrder]: currentPlayer,
    };
    checkWin(newPositions, currentPlayer)
      ? handleGameOver()
      : updateCurrentPlayer();
    setFilledPositions(newPositions);
  };

  const handleNextGameRound = () => {};

  const getCellInput = (cellOrder) => {
    if (filledPositions[cellOrder] === PLAYER1) {
      return "X";
    } else if (filledPositions[cellOrder] === PLAYER2) {
      return "0";
    } else {
      return "";
    }
  };

  const renderGameOver = () => {
    return (
      <div className="flex flex-col gap-5 items-center w-80">
        <span className="text-orange-900">
          {noWinner ? "No Winner" : `${playerNames[currentPlayer]} WON!!!`}
        </span>
        <Button text={"Next Round"} onClick={handleNextGameRound} />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Header />
      <section>
        {!gameOver ? (
          <Grid
            getCellInput={getCellInput}
            handleClickCell={handleClickCell}
            filledPositions={filledPositions}
          />
        ) : (
          renderGameOver()
        )}
      </section>
    </div>
  );
};

export default GameScreen;
