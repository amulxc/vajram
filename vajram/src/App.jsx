import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';  // Import Home component
// import About from './About'; // Import About component
import Investor_application from './pages/investor-application';
import Booking from './pages/booking';
import Thankyou from './pages/thank-you';



const App = () => {
  return (
    <Router>
      <nav>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/investor-application" element={<Investor_application />} />
        <Route path="/booking"  element={<Booking />} />
        <Route path="/thank-you"  element={<Thankyou />} />
              
      </Routes>
    </Router>
  );
};

export default App;
