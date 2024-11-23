/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ReactAudioPlayer from "react-audio-player";

const Game = ({
  contentType,
  contentSource,
  context,
  reasons,
  correctAnswer,
  index,
  setIndex,
  afterInfo,
}) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);
  const [scoreR1, setScoreR1] = useState(0);
  const [scoreR2, setScoreR2] = useState(0);
  const [reasonVisibility, setReasonVisibility] = useState(false);
  const [answersDisabled, setAnswersDisabled] = useState(false);
  const [lottieAnimation, setLottieAnimation] = useState(true);
  const [showFlashScreen, setShowFlashScreen] = useState(true);
  const timerInterval = useRef(null);

  //set score in local storage
  useEffect(() => {
    const savedScoreR1 = localStorage.getItem("scoreR1");
    const savedScoreR2 = localStorage.getItem("scoreR2");

    if (savedScoreR1) setScoreR1(parseInt(savedScoreR1, 10));
    if (savedScoreR2) setScoreR2(parseInt(savedScoreR2, 10));
  }, []);

  //set score in local storage
  useEffect(() => {
    if (index < 3){
      localStorage.setItem("scoreR1", scoreR1);
    }
  }, [index, scoreR1]);

  //set score in local storage
  useEffect(() => {
    if (index >= 3) {
      localStorage.setItem("scoreR2", scoreR2);
    }
  }, [index, scoreR2]);

  //flashes screen for game started and returning from info
  useEffect(() => {
    const flashTimer = setTimeout(() => {
      setShowFlashScreen(false);
    }, 2000);

    return () => clearTimeout(flashTimer);
  }, []);

  //handles game logic  
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handleAnswerClick = (btnClick) => {
    setReasonVisibility(true);
    setAnswersDisabled(true);
    setLottieAnimation(false);
    clearInterval(timerInterval.current);

    if (btnClick === correctAnswer)
      if (index < 3) {
        setScoreR1((prevScore) => prevScore + 1);
      } else {
        setScoreR2((prevScore) => prevScore +1);
      }
  };

  const handleNextRoundClick = () => {
    if (index === 2) {
      navigate("/info");
    }

    if (index < 5) {
      setIndex((prevIndex) => prevIndex + 1);
      setReasonVisibility(false);
      setLottieAnimation(true);
      setAnswersDisabled(false);

      setTimer(10);
      timerInterval.current = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
    else if (index === 5) {
      navigate("/gameOver");
    }
  };

  return (
    <>
      {showFlashScreen ? (
        <div className="flex justify-center items-center">
          {afterInfo ? (
            <div className="text-5xl font-bold animate-flash my-96">
              Let&apos;s get back to the game
            </div>
          ) : (
            <div className="text-5xl font-bold animate-flash my-96">
              Game Starting...
            </div>
          )}
        </div>
      ) : (
        <div
          key={index}
          className="h-screen flex justify-center items-center animate-fadeIn"
        >
          <div className="w-1/2 h-3/4 bg-gray-200 rounded-xl px-8 flex gap-5 flex-col">
            <div
              id="topRow"
              className="flex flex-row items-center justify-between"
            >
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
              {index < 3 ? (
                <div className="text-2xl font-bold text-center mr-32">
                  Score: {scoreR1}
                </div>
              ) : (
                <div className="text-2xl font-bold text-center mr-32">
                  Score: {scoreR2}
                </div>
              )}
            </div>
            <div id="mainContent">
              {contentType === "IMG" && (
                <div className="flex justify-center items-center">
                  <img src={contentSource} className="rounded-xl w-2/5" />
                </div>
              )}
              {contentType === "TXT" && (
                <div className="flex justify-center items-center flex-col">
                  <p className="text-lg font-semibold mb-4">{context}</p>
                  <p className="bg-slate-300 p-8 rounded-3xl max-w-xl font-semibold">
                    {contentSource}
                  </p>
                </div>
              )}
              {contentType === "VOICE" && (
                <div className="flex flex-col justify-center items-center">
                  <p className="text-lg font-semibold mb-24">{context}</p>
                  <ReactAudioPlayer
                    className="w-100"
                    src={contentSource}
                    controls
                    autoPlay={false}
                  />
                </div>
              )}
            </div>
            <div
              id="buttonContainer"
              className="flex flex-row justify-center items-center gap-40 mt-12"
            >
              <button
                className="bg-red-500 w-48 p-4 rounded-3xl text-xl text-white hover:bg-red-700"
                onClick={() => handleAnswerClick("AI")}
                disabled={answersDisabled}
              >
                AI Generated
              </button>
              <button
                className="bg-green-500 w-48 p-4 rounded-3xl text-xl text-white hover:bg-green-700"
                onClick={() => handleAnswerClick("Human")}
                disabled={answersDisabled}
              >
                Human Created
              </button>
            </div>
          </div>
          {reasonVisibility && (
            <div className="bg-gray-200 relative translate-x-24 w-72 p-4 rounded-3xl flex flex-col h-auto animate-fadeIn">
              <div className="text-center text-2xl font-semibold mb-8">
                Feedback
              </div>
              <ul className="list-disc list-inside text-xl flex flex-col gap-2">
                {reasons.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex justify-center items-center">
                <button
                  className="bg-green-500 w-48 p-4 rounded-3xl text-xl text-white mt-24 hover:bg-green-700"
                  onClick={handleNextRoundClick}
                >
                  Next Round
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Game;
