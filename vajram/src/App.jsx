import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';  // Import Home component
// import About from './About'; // Import About component



const App = () => {
  return (
    <Router>
      <nav>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />       
      </Routes>
    </Router>
  );
};

export default App;
