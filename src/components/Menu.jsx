import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { Switch, Route } from 'react-router-dom';
import Logo from './Logo.jsx';

function Menu() {
  return (
    <div className="Menu">
      <NavBar/>
      <div className="logoFloss">
      <Logo/>
      </div>
      </div>

  );
}

export default Menu;
