import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quizes from "./components/Quizes";
import Navbar from './components/Navbar';
import Quiz from './components/Quiz'; // Assuming you have this component created

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quizes />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
