import "../index.css";
import copilotLogo from "../assets/logos/copilot.png";
import geminiLogo from "../assets/logos/gemini.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-3/4 h-5/8 bg-gray-200 rounded-xl p-8 flex gap-20 flex-col">
        <div id="top" className="flex flex-row gap-20 h-7/8">
          <div id="left" className="w-1/2 flex flex-col">
            <div className="text-6xl mb-6">Can You Detect AI?</div>
            <div className="grid grid-cols-2 gap-4">
              <img src={copilotLogo} className="rounded-lg h-100 w-48" />
              <img src={geminiLogo} className="rounded-lg h-100 w-48" />
            </div>
            <div className="text-5xl mt-auto">Game Objective</div>
            <div className="text-xl mt-4">
              DetectAI challenges you to attempt to distinguish between real and
              AI-generated content. You will be presented with short pieces of
              text, image and audio content. Your task is to decide whether it
              was created by a human or AI. Test your skills and see if you can
              identify real from fake!
            </div>
          </div>
          <div id="right" className="w-1/2 flex flex-col gap-3">
            <div className="text-5xl mt-5">How To Play</div>
            <ul className="list-disc list-inside text-lg mb-4 flex flex-col gap-2">
              <li className="text-xl">
                Review text, images, and audio presented to you.
              </li>
              <li className="text-xl">
                Make your guess: Real or AI-generated?
              </li>
              <li className="text-xl">
                Earn points for accuracy and track your progress.
              </li>
              <li className="text-xl">
                For voice and text content you will receive some context as to
                where the content may be from. However, no context will be
                provided for images.
              </li>
              <li className="text-xl">
                For the first round we will not provide you with any feedback
                after you answer. Our goal is to get a grasp on your skills at
                detecting AI content.
              </li>
              <li className="text-xl">
                In between rounds we will show you some techniques and key
                characteristics to look for to detect if content is AI generated
                or not.
              </li>
              <li className="text-xl">
                For the second round after each guess you will receive some
                educational feedback.
              </li>
              <li className="text-xl">
                Think you got what it takes? Click Play Now to start!
              </li>
            </ul>
          </div>
        </div>
        <div id="btnContainer" className="flex justify-center items-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 w-40"
            onClick={handleClick}
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
