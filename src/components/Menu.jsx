import React from 'react';
import logo from './logo.png';
import './Menu.css';
import NavBar from './components/NavBar.jsx';
import { Switch, Route } from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">
      <header className="App-header">
        <NavBar>
        <img src={logo} className="App-logo" alt="logo"/></a>
      </header>
    </div>
  );
}

export default Menu;
