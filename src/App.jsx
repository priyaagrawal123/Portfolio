import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Project from "./components/Project";
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url('./assets/girl2.avif')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<div><Title /></div>} />
          <Route path="/title" element={<div><Title /></div>} />
          <Route path="/project" element={<div><Project /></div>} />
          <Route path="/about" element={<div><About /></div>} />
          <Route path="/resume" element={<div><Resume /></div>} />
          <Route path="/contact" element={<div><Contact /></div>} />
        </Routes>
      </div>
    </div>

  );
}

export default App;


