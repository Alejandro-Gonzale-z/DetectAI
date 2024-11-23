import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InfoPage = () => {
  const [showFlashScreen, setShowFlashScreen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlashScreen(false); // Hide flash screen after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const handleClick = () => {
    const indexAfterInfo = 3;
    navigate("/game", { state: { index: indexAfterInfo } });
  };

  return (
    <>
      {showFlashScreen ? (
        <div className="flex justify-center items-center">
          <div className="text-5xl font-bold animate-flash my-96">
            Let&apos;s Learn About AI Detection Methods
          </div>
        </div>
      ) : (
        <div className="h-screen animate-fadeIn">
          <div className="flex justify-center items-center">
            <div className="h-3/4 rounded-xl p-8 flex gap-24 flex-row">
              <div id="left" className="w-1/3 bg-gray-200 p-8 rounded-xl">
                <h1 className="text-6xl mb-8">Text</h1>
                <ul className="list-disc list-inside text-lg flex flex-col gap-8">
                  <p className="text-2xl">
                    AI text content can be detected by .....
                  </p>
                  <li className="text-2xl">
                    Searching for repetitive phrases, or phrases repeating the
                    same general point. In the excerpt shown earlier we read
                    multiple times the AI speaking on how talented Travis Taylor
                    is.
                  </li>
                  <li className="text-2xl">
                    The best thing we can do is recognize false information. AI
                    often fabricates plausiable sounding but incorrect
                    information. The best way to detect AI is by fact checking
                    if the claims it makes are true. In the content shown
                    earlier, Travis Taylor does not exist.
                  </li>
                  <li className="text-2xl">
                    AI text content often has a lack of specificity and relevant
                    details.
                  </li>
                  <li className="text-2xl">
                    Please note that there are many challenges in detecting AI
                    and some of the research we found did conclude that AI text
                    detection can be very unreliable.
                  </li>
                </ul>
              </div>
              <div id="middle" className="w-1/3 bg-gray-200 p-8 rounded-xl">
                <h1 className="text-6xl mb-8">Voice</h1>
                <ul className="list-disc list-inside text-lg flex flex-col gap-4">
                  <p className="text-2xl">
                    AI voice content can be detected by .....
                  </p>
                  <li className="text-2xl">
                    Instead of searching for the absence of human voice
                    features, we need to search for the presence of digital
                    features!
                  </li>
                  <li className="text-2xl">
                    One common feature of digital voices is an unnatural pauses
                    and cadence. It will either have a complete absence of
                    pauses or the misplacement of pauses.
                  </li>
                  <li className="text-2xl">
                    We can also search for a consistency in tone, AI voices
                    often contain one tone, pitch, and speed across the entire
                    audio recording.
                  </li>
                  <li className="text-2xl">
                    AI generated audio is &quot;perfect&quot;, there are no
                    ambient noises in the background.
                  </li>
                  <li className="text-2xl">
                    All of these methods apply to the audio content heard
                    earlier. The audio contained one consistent tone, speed, and
                    there was no background noise.
                  </li>
                </ul>
              </div>
              <div id="right" className="w-1/3 bg-gray-200 p-8 rounded-xl">
                <h1 className="text-6xl mb-8">Image</h1>
                <ul className="list-disc list-inside text-lg flex flex-col gap-4">
                  <p className="text-2xl">
                    AI image content can be detected by .....
                  </p>
                  <li className="text-2xl">
                    Searching for inconsistencies and details that aren&apos;t
                    possible in reality.
                  </li>
                  <li className="text-2xl">
                    The images often contain unnatural textures and lightnings
                    that can&apos;t appear in reality. These details are often
                    very subtle but searching for these subtle details can be a
                    very effective method.
                  </li>
                  <li className="text-2xl">
                    AI image generation has trouble creating the small details
                    necesary to create realistic looking fingers, eyes and hair.
                    If the image in question is of a person, make sure you look
                    at these details!
                  </li>
                  <li className="text-2xl">
                    In the image shown earlier, we could see the person&apos;s
                    detailed hair and the consistency in the stitching and
                    buttons on their clothes! These details could indicate that
                    this is a picture of a real person.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 w-1/6"
              onClick={handleClick}
            >
              Continue Playing
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoPage;
