import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import Game from "./Game";
import AIContentArray from "./AIContent";

const GamePage = () => {
  const location = useLocation();
  const [index, setIndex] = useState(location.state?.index || 0);

  return (
    <Game
      contentType={AIContentArray[index].contentType}
      contentSource={AIContentArray[index].contentSource}
      context={AIContentArray[index].context}
      reasons={AIContentArray[index].reasons}
      correctAnswer={AIContentArray[index].correctAnswer}
      index={index}
      setIndex={setIndex}
    />
  );
};
export default GamePage;
