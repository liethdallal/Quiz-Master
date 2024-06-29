import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styling/quiz.css' 

function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

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
                onClick={() => handleOptionClick(qIndex, oIndex)}
                className={selectedOptions[qIndex] === oIndex ? 'selected' : ''}
                id='answer-div'
              >
                {option.optionText}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Quiz;
