import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quizpage from './pages/QuizPage/QuizPage'
import Homepage from './pages/HomePage/HomePage';
import Resultspage from './pages/ResultsPage/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz/:id" element={<Quizpage />} />
        <Route path="/results" element={<Resultspage />}/>
      </Routes>
    </Router>
  );
}

export default App;
