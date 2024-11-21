import { useState } from "react";
import "./index.css";
import Game from "./Game";
import AIContentArray from "./AIContent";

const GamePage = () => {
  const [index, setIndex] = useState(0);

  return (
    <Game
      contentType={AIContentArray[index].contentType}
      contentSource={AIContentArray[index].contentSource}
      reasons={AIContentArray[index].reasons}
      correctAnswer={AIContentArray[index].correctAnswer}
      index={index}
      setIndex={setIndex}
    />
  );
};
export default GamePage;
