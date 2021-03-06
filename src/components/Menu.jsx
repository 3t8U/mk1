import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import wlogo from './images/wlogo.png';
import logoBack1 from './gifs/logoBack1.gif';
import './Enter.css';

function Menu() {

  var centerIsleStyles ={
    display: 'flex',
    justifyContent: 'center',
    itemAlign: 'center',
    image: "url(" + {logoBack1} + ")",
    zIndex: '2',
    minWidth: '100%',
    minHeight: 'auto',
    marginBottom: '100%',
    filter: 'invert(100%)',

  }

  var minStyles ={
  
    imageSize: '25%',


    marginBottom: '100%',


  }



  return (
    <div >
    <NavBar/>
      <div style={centerIsleStyles}>
      <Link to="/Enter"><img src={wlogo} style={minStyles} alt="logo" /></Link>
      </div>
      </div>

  );
}

export default Menu;
