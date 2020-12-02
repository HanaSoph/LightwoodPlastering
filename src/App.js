import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import HeroBanner from './components/HeroBanner.js';
import BigTextPara from './components/BigTextPara';
import ServicesBoxes from './components/ServicesBoxes.js';

function App() {
  return (
    <div>
      <NavBar />
      <HeroBanner />
      <BigTextPara />
      <ServicesBoxes />
    </div>
  );
}

export default App;
