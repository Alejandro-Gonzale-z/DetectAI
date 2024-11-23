import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GameOverPage = () => {
  const savedScoreR1 = parseInt(localStorage.getItem("scoreR1"), 10) || 0;
  const savedScoreR2 = parseInt(localStorage.getItem("scoreR2"), 10) || 0;
  const [showFlashScreen, setShowFlashScreen] = useState(true);
  const [viewSources, setViewSources] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleViewSourcesClick = () => {
    setViewSources(!viewSources);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      {showFlashScreen ? (
        <div className="flex justify-center items-center flex-col">
          <div className="text-5xl font-bold animate-flash3 mt-96">
            Let&apos;s see your results!
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center p-24 gap-36 animate-fadeIn">
          {!viewSources ? (
            <div className="flex flex-row justify-center gap-x-60">
              <div className="w-1/2 flex items-center flex-col bg-gray-200 p-8 rounded-3xl">
                <h1 className="text-5xl">Round 1</h1>
                <p className="text-lg mt-10 italic font-semibold">
                  Before Educational Info
                </p>
                <p className="text-4xl mt-10">Score: {savedScoreR1}</p>
              </div>
              <div className="w-1/2 flex items-center flex-col bg-gray-200 p-8 rounded-3xl">
                <h1 className="text-5xl">Round 2</h1>
                <p className="text-lg mt-10 italic font-semibold">
                  After Educational Info + Feedback
                </p>
                <p className="text-4xl mt-10">Score: {savedScoreR2}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col bg-gray-200 p-8 rounded-3xl gap-8 animate-fadeIn">
              <h1 className="text-5xl">Sources</h1>
              <ul className="list-disc list-inside text-lg mb-4 flex flex-col gap-2">
                <li className="text-lg">www.arxiv.org/abs/2303.11156</li>
                <li className="text-lg">
                  www.edintegrity.biomedcentral.com/articles/10.1007/s40979-023-00146-z
                </li>
                <li className="text-lg">
                  www.biomedeng.jmir.org/2024/1/e56245
                </li>
                <li className="text-lg">
                  www.nature.com/articles/s41598-023-45644-9
                </li>
                <li className="text-lg">
                  www.openaccess.thecvf.com/content/ICCV2023W/DFAD/html/Epstein_Online_Detection_of_AI-Generated_Images__ICCVW_2023_paper.html
                </li>
                <li className="text-lg">
                  www.onfido.com/blog/the-psychology-of-deepfakes-why-we-fall-for-them/
                </li>
              </ul>
            </div>
          )}
          <div className="w-1/2 flex flex-row gap-72 justify-center items-center">
            <button
              className="w-1/4 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-700 text-2xl"
              onClick={handleBackClick}
            >
              Back to Menu
            </button>
            {viewSources ? (
              <button
                className="w-1/4 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-700 text-2xl"
                onClick={handleViewSourcesClick}
              >
                View Score
              </button>
            ) : (
              <button
                className="w-1/4 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-700 text-2xl"
                onClick={handleViewSourcesClick}
              >
                View Sources
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GameOverPage;
