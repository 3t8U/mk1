import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';



 function Logo() {




   return(
     <Link to="/Menu"><img src={logo} className="App-logo" alt="logo" /></Link>
   );
 }

export default Logo;
