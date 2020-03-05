import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';



 function Lander() {




   return(
     <Link to="/Intro"><img src={logo} className="App-logo" alt="logo" /></Link>
   );
 }

export default Lander;
