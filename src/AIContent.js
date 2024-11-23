import humanImage from "./assets/humanImage.jpg"
import AIImage from "./assets/aiNYCimage.png"
import hurricaneAI from "./assets/hurricaneAI.mp3"
import emmaWatsonAI from "./assets/emmaWatsonAI.mp3"

const textSource1 = "Colorado football star Travis Moore, known for his extraordinary skills and incredible versatility, has officially declared his intention to enter the NFL Draft. Highly celebrated as one of the most dynamic and impactful players in college football, Moore has gained widespread recognition for his remarkable abilities to excel in both offensive and defensive roles. His announcement represents a pivotal moment not only in his own career but also for fans eagerly anticipating his transition to the professional stage. With unmatched talent and potential, Moore is expected to make a lasting impact in the NFL, drawing attention from analysts, scouts, and supporters alike.";
const textSource2 = "A month into the regular season, it's time to look at how well teams have executed some of their most important strategies. In some cases, such as the Cleveland Cavaliers' undefeated start or the Golden State Warriors riding a deep rotation to one of the Western Conference's best records, it's clear things are working out. But some teams still haven't seen their early-season priorities take off.";



const AIContentArray = [
  {contentType: 'TXT', contentSource: textSource1, context: "This may or may not be an excerpt from a recently released ESPN article.", reasons: ['The correct answer is AI generated.', 'We used Chat-GPT to write us a small paragraph on sports about a recent event.'], correctAnswer: 'AI'},
  {contentType: 'VOICE', contentSource: hurricaneAI, context: "This may or may not be an excerpt from a news network's youtube channel.", reasons: ['The correct answer is AI generated.', 'We used the Eleven Labs Voice AI to generate an audio recording based on the audio transcription of a news video found on youtube.'], correctAnswer: 'AI'},
  {contentType: 'IMG', contentSource: humanImage, context: "", reasons: ['The correct answer is Human created.', 'This image was picked from google images.' ,'We hoped the blurry background would throw you off.'], correctAnswer: 'Human' },
  {contentType: 'TXT', contentSource: textSource2, context: "This may or may not be an excerpt from a recently released ESPN article.", reasons: ['The correct answer is human created.', 'If anyone here follows basketball, the details written in this excerpt are true and very recent as the NBA season just started.', "The informality of the content, such as 'its clear things are working out', is another indicator that this is human written.",], correctAnswer: 'Human'},
  {contentType: 'IMG', contentSource: AIImage, context: "", reasons: ['The correct answer is AI generated.','There is a gray minivan parked on the left side of the road facing the wrong direction.', 'All of the trees, lights and some of the cars are the exact same just placed in different locations. We should expect atleast some of the trees to be slightly different.', 'The street lights are not connected to any poles.'], correctAnswer: 'AI'},
  {contentType: 'VOICE', contentSource: emmaWatsonAI, context: "This may or may not be an excerpt from a youtube video involving the actress Emma Watson.", reasons: ['The correct answer is AI generated.', 'The monotonicity of her voice is a key giveaway. If this were a entertainment video we would expect her voice to be much more upbeat.', 'The lack of inconsistency in the audio such as background noise indicates that this is AI generated.'], correctAnswer: 'AI'},
]

export default AIContentArray;