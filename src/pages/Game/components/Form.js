import React, { useState } from "react";
import { PLAYER1, PLAYER2 } from "constant";
import Button from "components/Button";
import Header from "components/Header";

const Form = ({ handleSavePlayers }) => {
  const [playerNames, setPlayerNames] = useState({});

  const handleChange = (event, player) => {
    setPlayerNames({
      ...playerNames,
      [player]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSavePlayers(playerNames);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Header />
      <form
        className="flex flex-col gap-10 items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex md:flex-row gap-5 md:gap-0 flex-col">
          <div className="flex flex-col md:border-r-2 md:pr-5 md:py-5">
            <h3 className="font-medium md:text-2xl text-xl mb-3">{PLAYER1}</h3>
            <input
              type="text"
              name={PLAYER1}
              required
              maxLength={5}
              className="border-gray-50 border-2 p-1"
              value={playerNames[PLAYER1] || ""}
              onChange={(e) => handleChange(e, PLAYER1)}
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col md:pl-5 md:py-5">
            <h3 className="font-medium md:text-2xl text-xl mb-3">{PLAYER2}</h3>
            <input
              type="text"
              name={PLAYER2}
              required
              maxLength={5}
              className="border-gray-50 border-2 p-1"
              value={playerNames[PLAYER2] || ""}
              onChange={(e) => handleChange(e, PLAYER2)}
              placeholder="Enter name"
            />
          </div>
        </div>
        <Button type="submit" text="Next" className="cursor-pointer w-20" />
      </form>
    </div>
  );
};

export default Form;
