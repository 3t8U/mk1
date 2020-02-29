import React from 'react';
import Logo from './Logo.jsx';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'



 function Intro() {

   return(
     <header className="App-header">
     <NavBar/>
     <div className = "logoStyle">
     <Logo/>
     </div>
     </header>

   );
 }

export default Intro;