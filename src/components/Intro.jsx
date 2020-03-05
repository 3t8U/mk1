import React from 'react';
import Logo from './Logo.jsx';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'
import tileBG from './tileBG.gif'
import './Intro.css';

 function Intro() {

   var logoStyles ={
     backgroundImage: "url(" + {tileBG} + ")",
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '50%',
     maxWidth: '5%',
     maxHeight: 'auto',
     marginBottom: '500%',
     imageAlign: 'center',
     filter: 'invert .5'

   }




   return(
     <div>
     <NavBar/>
     <div className="logoFloss">
     <Logo/>
     </div>

     </div>
   );
 }

export default Intro;
