/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import "./index.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Game = ({
  contentType,
  contentSource,
  reasons,
  correctAnswer,
  index,
  setIndex,
}) => {
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [reasonVisibility, setReasonVisibility] = useState(false);
  const [answersDisabled, setAnswersDisabled] = useState(false);
  const [lottieAnimation, setLottieAnimation] = useState(true);

  const timerInterval = useRef(null);

  useEffect(() => {
    timerInterval.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(timerInterval.current);
          handleAnswerClick("none");
        }
        return prevTimer > 0 ? prevTimer - 1 : 0;
    });
  }, 1000);

    return () => clearInterval(timerInterval.current);
  }, []);

  const handleAnswerClick = (btnClick) => {
    setReasonVisibility(true);
    setAnswersDisabled(true);
    setLottieAnimation(false);
    clearInterval(timerInterval.current);

    if (btnClick === correctAnswer) setScore(score + 1);
  };

  const handleNextRoundClick = () => {
    if (index < 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setReasonVisibility(false);
      setAnswersDisabled(false);
      setLottieAnimation(true);

      setTimer(60);
      timerInterval.current = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 h-3/4 bg-gray-200 rounded-xl px-8 flex gap-5 flex-col">
        <div id="topRow" className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <DotLottieReact
              key={lottieAnimation ? "play" : "stop"}
              src="https://lottie.host/d616fbca-5586-4b77-8eb8-35aacec7abac/A9VpsvYx10.lottie"
              loop
              autoplay={lottieAnimation}
              className="max-w-sm"
            />
            <div className="text-2xl font-bold text-center relative -translate-x-24">
              Time Remaining: {timer}s
            </div>
          </div>
          <div className="text-2xl font-bold text-center mr-32">
            Score: {score}
          </div>
        </div>
        <div id="mainContent">
          {contentType === "IMG" && (
            <div className="flex justify-center items-center">
              <img src={contentSource} className="rounded-xl w-1/2" />
            </div>
          )}
          {contentType === "TXT" && (
            <div className="flex justify-center items-center">
              <p className="bg-slate-300 p-8 rounded-3xl max-w-xl font-semibold">
                {contentSource}
              </p>
            </div>
          )}
        </div>
        <div
          id="buttonContainer"
          className="flex flex-row justify-center items-center gap-40 mt-12"
        >
          <button
            className="bg-red-500 w-48 p-4 rounded-3xl text-xl text-white"
            onClick={() => handleAnswerClick("AI")}
            disabled={answersDisabled}
          >
            AI Generated
          </button>
          <button
            className="bg-green-500 w-48 p-4 rounded-3xl text-xl text-white"
            onClick={() => handleAnswerClick("Human")}
            disabled={answersDisabled}
          >
            Human Created
          </button>
        </div>
      </div>
      {reasonVisibility && (
        <div className="bg-gray-200 relative translate-x-24 h-1/2 w-72 p-4 rounded-3xl flex flex-col">
          <div className="text-center text-2xl font-semibold mb-8">
            How can you tell?
          </div>
          <ul className="list-disc list-inside text-xl">
            {reasons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <button
              className="bg-green-500 w-48 p-4 rounded-3xl text-xl text-white mt-48"
              onClick={handleNextRoundClick}
            >
              Next Round
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
