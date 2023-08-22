import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Photos from './pages/Photos';
import Contacts from './pages/Contacts';
import ContactDetail from './pages/ContactDetail';
import './pages/style.css'

function App() {
  return (
    <Router>
      <div>
        <nav className='navigator'>
          
              <Link to="/">Головна</Link>
           
              <Link to="/Publications">Публікації</Link>
           
              <Link to="/Photos">Фотографії</Link>
            
              <Link to="/Contacts">Контакти</Link>
          
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Contacts/:username" element={<ContactDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
