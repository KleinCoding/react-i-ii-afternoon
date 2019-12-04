import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Populate from "./populate.js"

function App() {
  return (
    <div>
    <nav className="navbar">
    <ul className="nav-links">
      <ul className="nav-item">Home</ul>
    </ul>
  </nav>
  
  <nav className="containerbox">
    <Populate />

  </nav>
  </div>
  );
}

export default App;
