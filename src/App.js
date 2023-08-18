import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
           
              <Link to="/photos">Фотографії</Link>
            
              <Link to="/contacts">Контакти</Link>
          
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:username" element={<ContactDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
