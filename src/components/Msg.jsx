import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Logo from './Logo'

 function Msg() {
  var contactStyles ={


  }


   return(
     <header className="App-header">
     <div className = "logoMini">
     <Logo/>
     </div>
     <NavBar/>

     <div>

     </div>
     </header>



   );
 }

export default Msg;
