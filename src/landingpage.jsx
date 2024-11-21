import "./index.css";
import aiLandingPage from "./assets/aiLandingPage.jpg";

const landingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-3/4 h-5/8 bg-gray-200 rounded-xl p-8 flex gap-20 flex-col">
        <div id="top" className="flex flex-row gap-20 h-7/8">
          <div id="left" className="w-1/2 flex flex-col">
            <div className="text-6xl mb-2">CAN YOU DETECT AI?</div>
            <img src={aiLandingPage} className="rounded-lg h-100" />
          </div>
          <div id="right" className="w-1/2 flex flex-col gap-3">
            <div className="text-5xl">Game Objective</div>
            <div className="text-lg">
              DetectAI challenges you to attempt to distinguish between real and
              AI-generated content. You will be presented with short pieces of
              text, image and video. Your task is to decide whether it was
              created by a human or AI. Test your skills and see if you can
              identify real from fake!
            </div>
            <div className="text-5xl">How To Play</div>
              <ul className="list-disc list-inside text-lg mb-4">
                <li>Review text, images, or videos presented to you.</li>
                <li>Make your guess: Real or AI-generated?</li>
                <li>
                  After each round, get detailed explanations that highlight the
                  key features revealing whether the content is real or
                  AI-generated.
                </li>
                <li>Earn points for accuracy and track your progress.</li>
              </ul>
              <div className="text-lg">Think you got what it takes? Click play now to start!</div>
          </div>
        </div>
        <div id="btnContainer" className="flex justify-center items-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 w-40">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
