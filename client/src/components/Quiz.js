import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../component-styling/quiz.css' 

function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch(`/api/quizes/${id}`);
      const data = await response.json();

      if (response.ok) {
        setQuiz(data);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleOptionClick = (qIndex, oIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [qIndex]: oIndex,
    }));
  };
  
  const handleDiselectOption = (qIndex) => {
    setSelectedOptions((prev) => {
      const newSelectedOptions = { ...prev };
      delete newSelectedOptions[qIndex];
      return newSelectedOptions;
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz.questions.forEach((question, qIndex) => {
      if (selectedOptions[qIndex] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 id='quiz-title'>{quiz.title}</h1>

      <p id='quiz-description'>{quiz.description}</p>
      
      {quiz.questions && quiz.questions.map((question, qIndex) => (
        <div id='question-div' key={qIndex}>
          <h3 className='quiz-question'>{question.question}</h3>
            {question.options && question.options.map((option, oIndex) => (
              <div
              key={oIndex}
              onClick={() =>
                selectedOptions[qIndex] === oIndex
                  ? handleDiselectOption(qIndex)
                  : handleOptionClick(qIndex, oIndex)
              }
              className={selectedOptions[qIndex] === oIndex ? 'selected' : ''}
              id='answer-div'
              >
                {option.optionText}
              </div>
            ))}
        </div>
      ))}
           <button onClick={handleSubmit} id='submit'>Submit</button>

          {score !== null && (
      <div>
      <h2 id='your-score'>Your Score: {score} / {quiz.questions.length}</h2>
    </div>
  )}
    </div>
  );
}

export default Quiz;
