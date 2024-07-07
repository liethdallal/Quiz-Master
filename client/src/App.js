import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quizpage from './pages/Quizpage'
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz/:id" element={<Quizpage />} />
      </Routes>
    </Router>
  );
}

export default App;
