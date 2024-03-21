import {useEffect, useState} from 'react'

function App() {
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
    <div className="App">
            <h1>Quizes</h1>
            <ul>{quizes.map((quiz, index) => (
              <div key={index}>
                <li>{quiz.title}</li> 
                <li>{quiz.description}</li>
              </div>
              
  ))}
  
            </ul>
    </div>
  );
}

export default App;
