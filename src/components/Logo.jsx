import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';



 function Logo() {




   return(
     <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
   );
 }

export default Logo;
