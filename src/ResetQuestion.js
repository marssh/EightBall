import React, { useState } from 'react';

export function ResetQuestion() {
  const [color, setColor] = useState('black');
  const [answer, setAnswer] = useState('Think of a question')

  return (
    <div>
      <button onClick={() => {
        setColor('black');
        setAnswer('Think of a question');
      }}>Reset</button>
    </div>
  );
}