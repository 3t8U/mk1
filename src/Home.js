import React from 'react';
import logo from './logo.png';
import './Home.css';
import Menu from './components/SideBar.jsx';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="Home">
      <header className="App-header">

        <a href=<Link to="/Menu"></Link>><img src={logo} className="App-logo" alt="logo" /></a>
      </header>
    </div>
  );
}

export default Home;
