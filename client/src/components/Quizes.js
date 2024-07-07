import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../component-styling/quizes.css';

function Quizes() {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    const fetchQuizes = async () => {
      const response = await fetch('/api/quizes');
      const data = await response.json();

      if (response.ok) {
        setQuizes(data);
      }
    };
    fetchQuizes();
  }, []);

  return (
    <div id='felxbox-div'>
      <div className="quizes-div">
        {quizes.map((quiz, index) => (
          <Link to={`/quiz/${quiz._id}`} key={index} className='quizes-descrip'>
            <h1>{quiz.title}</h1>
            <h3>{quiz.description}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Quizes;
