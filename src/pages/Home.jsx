import React from 'react';
import './style2.css';

const deadpoolImage = [
    'https://wallpapers.com/images/high/deadpool-pictures-woo79ni2uzp59w4b.webp'
]
const Home = () => {
  return (
    <div className="welcome-container">
    <h2>Welcome!</h2>
    <img id="deadpool-image" src={deadpoolImage} alt="Deadpool" />
    
  </div>
);
};

export default Home;
