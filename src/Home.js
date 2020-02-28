import React from 'react';
import logo from './logo.png';
import './Home.css';
import SideBar from './components/SideBar.jsx';
import { Switch, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SideBar/>
      </header>
    </div>
  );
}

export default Home;
