import testImage from "./assets/humanImage.jpg";

const textSource1 = "YO LETS TEST THIS ARRAY THING";


const AIContentArray = [
  {contentType: 'IMG', contentSource: testImage, reasons: ['Reason10', 'Reason20', 'Reason30'], correctAnswer: 'Human' },
  {contentType: 'TXT', contentSource: textSource1, reasons: ['Reason11', 'Reason21', 'Reason31'], correctAnswer: 'AI'}
]

export default AIContentArray;