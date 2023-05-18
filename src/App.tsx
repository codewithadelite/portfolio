import React from "react";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
