import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Results from "./components/Results";
import HandleState from "./context/handleState";


function App() {
  return (
    <>
      <HandleState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home2 />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Router>
      </HandleState>
    </>
  );
}

export default App;
