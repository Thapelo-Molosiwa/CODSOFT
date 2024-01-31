// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import Contact from '../components/contacts/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
