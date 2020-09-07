import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import HeroBanner from './components/HeroBanner.js';

function App() {
  return (
    <div>
      <NavBar />
      <HeroBanner />
    </div>
  );
}

export default App;
