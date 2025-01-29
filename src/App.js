import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
