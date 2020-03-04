import React from 'react';
import Logo from './Logo.jsx';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'



 function Intro() {

   var logoStyles ={
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
     <div className="App-header">
     <NavBar/>
     
     </div>

   );
 }

export default Intro;
