import {useEffect, useState} from 'react'

function Quiz() {
  const [quizes, setQuizes] = useState([])

  useEffect( () => {
    const fetchQuizes = async () =>{

    const response = await fetch('/api/quizes')
    const data = await response.json() 

    if(response.ok){
      setQuizes(data)
    }
  }
  fetchQuizes()
  }, [])
  return (
    <div className="quiz-div">
<h1>Quizzes</h1>
<ul>
  {quizes.map((quiz, index) => (
    <div key={index}>
      <li>Title: {quiz.title}</li> 
      <li>Description: {quiz.description}</li>
      <li>
        Questions:
        <ul>
          {quiz.questions.map((question, qIndex) => (
            <li key={qIndex}>
              {question.question}
              <ul>
                {question.options.map((option, oIndex) => (
                  <li key={option._id}>
                    {option.optionText}
                    {question.correctAnswer === oIndex ? " (Correct)" : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    </div>
  ))}
</ul>


    </div>
  );
}

export default Quiz;