import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { Switch, Route } from 'react-router-dom';
import Logo from './Logo.jsx';
import logo from './images/logo.png';
import wlogo from './images/wlogo.png';
import logoBack1 from './gifs/logoBack1.gif';
import './Enter.css';

function Menu() {

  var centerIsleStyles ={
    display: 'flex',
    justifyContent: 'center',
    itemAlign: 'center',
    paddingTop: '%',
    image: "url(" + {logoBack1} + ")",
    zIndex: '2',
    minWidth: '50%',
    minHeight: 'auto'

  }
  return (
    <div >
      <NavBar/>
      <div style={centerIsleStyles}>
      <Link to="/Menu"><img src={wlogo} className="App-logo" alt="logo" /></Link>
      </div>
      </div>

  );
}

export default Menu;
