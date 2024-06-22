import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

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

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{quiz.title}</h1>

      <p>{quiz.description}</p>
      
      {quiz.questions && quiz.questions.map((question, qIndex) => (
        <div key={qIndex}>
          <h3>{question.question}</h3>
          <ul>
            {question.options && question.options.map((option, oIndex) => (
              <li key={oIndex}>{option.optionText}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Quiz;
