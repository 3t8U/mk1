import React from 'react';
import logo from './logo.png';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <NavBar/>
      <div className = "logoStyle">
      <Link to="/Menu"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>
      </header>
    </div>

  );
}

export default Home;
