import React, {useState} from 'react';

// function answerClick() {
  
// }

export function EightBall({ answers }) {
  const [color, setColor] = useState('black');
  const [answer, setAnswer] = useState('Think of a question');
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  console.log(randomAnswer);
  const { color: newColor, msg } = randomAnswer;

  return (
    <div style={{ height: '300px', width: '300px', backgroundColor: color, color: 'white', borderRadius: '50%' }}
         onClick={() => {
        setColor(newColor);
           setAnswer(msg);
           
      }}>
      <p style={{ textAlign: 'center', paddingTop: '100px' }}>{answer}</p>
    </div>
  )
}