// Resultspage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-styling/resultspage.css';

function Resultspage() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };


  return (
    <>
      <h2 id='your-score'>Your Score: {score} / {totalQuestions}</h2>
    </>
  );
}

export default Resultspage;
