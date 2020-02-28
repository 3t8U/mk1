import React from 'react';
import logo from './logo.png';
import './Home.css';
import Menu from './components/Menu.jsx';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">

      <Link to="/Menu"><img src={logo} className="App-logo" alt="logo" /></Link>
      </header>

    </div>

  );
}

export default Home;
