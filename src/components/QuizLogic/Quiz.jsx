// src/components/Quiz.js
import React, { useState } from 'react';

function Quiz({ question, choices, answer }) {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const statusStyle = submitted
    ? isCorrect
      ? { color: 'green', fontWeight: 'bold' }
      : { color: 'red', fontWeight: 'bold' }
    : {};

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px', margin: '20px 0' }}>
      <h4>❓ Comprehension Check</h4>
      <p><strong>{question}</strong></p>
      {choices.map((choice) => (
        <div key={choice}>
          <label>
            <input
              type="radio"
              name="quiz-choice"
              value={choice}
              checked={selected === choice}
              onChange={(e) => setSelected(e.target.value)}
              disabled={submitted}
            />{' '}
            {choice}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit} disabled={submitted || selected === null} style={{ marginTop: '10px' }}>
        Submit Answer
      </button>

      {submitted && (
        <p style={statusStyle}>
          {isCorrect ? '✅ Correct! Well done.' : `❌ Incorrect. The answer was: ${answer}`}
        </p>
      )}
    </div>
  );
}

export default Quiz;