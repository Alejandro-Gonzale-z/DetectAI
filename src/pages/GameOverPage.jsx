import { useEffect, useState } from "react";

const GameOverPage = () => {
  const savedScoreR1 = parseInt(localStorage.getItem("scoreR1"), 10) || 0;
  const savedScoreR2 = parseInt(localStorage.getItem("scoreR2"), 10) || 0;
  const [showFlashScreen, setShowFlashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFlashScreen ? (
        <div className="flex justify-center items-center flex-col">
          <div className="text-5xl font-bold animate-flash3 mt-96">
            Let&apos;s see your results!
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div className="w-1/2 flex flex-row gap-x-60">
            <div className="w-1/2 flex items-center flex-col bg-gray-200 p-8 rounded-3xl">
              <h1 className="text-5xl">Round 1</h1>
              <p className="text-lg mt-10 italic font-semibold">Before Educational Info</p>
              <p className="text-4xl mt-10">Score: {savedScoreR1}</p>
            </div>
            <div className="w-1/2 flex items-center flex-col bg-gray-200 p-8 rounded-3xl">
              <h1 className="text-5xl">Round 2</h1>
              <p className="text-lg mt-10 italic font-semibold">After Educational Info + Feedback</p>
              <p className="text-4xl mt-10">Score: {savedScoreR2}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameOverPage;
