import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Work from './Components/Work.jsx';
import Reviews from './Components/Reviews.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx'; // Ensure Navbar is imported

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          {/* Route that displays all components on the initial load */}
          <Route
            path='/'
            element={
              <>
                <Home />
                <About />
                <Work />
                <Reviews />
                <Contact />
              </>
            }
          />
          {/* Separate routes for each section */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
