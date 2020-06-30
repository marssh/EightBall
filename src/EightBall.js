import React, {useState} from 'react';

export function EightBall({ answers }) {
  const [color, setColor] = useState('black');
  const [answer, setAnswer] = useState('Think of a question');
  


  function answerClick() {
    const {color,msg} = answers[Math.floor(Math.random() * answers.length)];
    setColor(color);
    setAnswer(msg);
  }

  return (
    <div>
      <div style={{ height: '300px', width: '300px', backgroundColor: color, color: 'white', borderRadius: '50%' }}
        onClick={answerClick}>
      <p style={{ textAlign: 'center', paddingTop: '100px' }}>{answer}</p>
    </div>
    <div>
    <button onClick={() => {
      setColor('black');
      setAnswer('Think of a question');
      }}>Reset</button>
      </div>
    </div>
  )
}