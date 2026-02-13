import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home1";

import About from "./components/About";
import Projects from "./components/Projects";
import Celebrity from "./components/Celebrity";
import Hollywood from "./components/Hollywood";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="celebrity" element={<Celebrity />} />
        <Route path="hollywood" element={<Hollywood />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
