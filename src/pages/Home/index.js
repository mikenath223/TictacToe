import React, { useState } from "react";
import Game from "pages/Game";
import Button from "components/Button";
import Header from "components/Header";

const Home = () => {
  const [isGameStart, setIsGameStart] = useState(false);

  const renderLandingScreen = () => {
    return (
      <section className="flex flex-col items-center gap-5">
        <Header />
        <Button onClick={() => setIsGameStart(true)} text="Start Game" />
      </section>
    );
  };

  return isGameStart ? <Game /> : renderLandingScreen();
};

export default Home;
