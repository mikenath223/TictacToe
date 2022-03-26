import React, { useState, useEffect } from "react";
import Grid from "components/Grid";
import { INITIALSCORES, PLAYER1, PLAYER2, PLAYERS } from "constant";
import { checkWin } from "utils/checkWin";
import ScoreTrack from "./ScoreTrack";
import Button from "components/Button";
import Header from "components/Header";
import "../index.css";

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

  const handleGameOver = () => {
    setGameOver(true);
    setScores({
      ...scores,
      [currentPlayer]: scores[currentPlayer] + 1,
    });
  };

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

  const handleNextGameRound = () => {
    setGameOver(false);
    setFilledPositions({});
    setNoWinner(false);
  };

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
      <div className="flex flex-col gap-5 items-center w-80 absolute top-0 bottom-0 gameOver">
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
      <section className="flex gap-10 md:items-start items-center flex-col md:flex-row">
        <ScoreTrack
          isCurrentPlayer={currentPlayer === PLAYER1}
          player={playerNames[PLAYER1]}
          score={scores[PLAYER1]}
          gameOver={gameOver}
          symbol="X"
        />
        <div className="relative">
          <Grid
            getCellInput={getCellInput}
            handleClickCell={handleClickCell}
            filledPositions={filledPositions}
          />
          {gameOver && renderGameOver()}
        </div>
        <ScoreTrack
          isCurrentPlayer={currentPlayer === PLAYER2}
          player={playerNames[PLAYER2]}
          score={scores[PLAYER2]}
          gameOver={gameOver}
          symbol="O"
        />
      </section>
    </div>
  );
};

export default GameScreen;
