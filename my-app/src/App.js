import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Populate from "./populate.js"
import Header from "./header.js"
function App() {
  return (  
    <div>
<Header />
  
  
  <nav className="containerbox">
    <Populate />

  </nav>
  </div>
  );
}

export default App;
