import React, { useState } from "react";
import PlayerInfo from "./components/PlayerInfo";
import GameScreen from "./components/GameScreen";

const Game = () => {
  const [players, setPlayers] = useState(null);

  const handleSavePlayers = (players) => {
    setPlayers(players);
  };

  return (
    <section>
      {!players ? (
        <PlayerInfo handleSavePlayers={handleSavePlayers} />
      ) : (
        <GameScreen playerNames={players} />
      )}
    </section>
  );
};

export default Game;
