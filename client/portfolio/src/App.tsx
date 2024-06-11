import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/projects" element = {<Projects/>} />
        {/* more routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
