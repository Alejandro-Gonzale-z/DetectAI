import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
import Game from "../Game";
import AIContentArray from "../AIContent";

const GamePage = () => {
  const location = useLocation();
  const [index, setIndex] = useState(location.state?.index || 0);
  const [afterInfo] = useState(location.state?.afterInfo || false);
  return (
    <Game
      contentType={AIContentArray[index].contentType}
      contentSource={AIContentArray[index].contentSource}
      context={AIContentArray[index].context}
      reasons={AIContentArray[index].reasons}
      correctAnswer={AIContentArray[index].correctAnswer}
      index={index}
      setIndex={setIndex}
      afterInfo={afterInfo}
    />
  );
};
export default GamePage;
