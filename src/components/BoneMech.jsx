import React from 'react';
import Logo from './Logo.jsx';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'
import boneMech from './images/boneMech.jpg'
import './PortalSmashers.css';

 function BoneMech
 () {

   var shitStyles ={
     size: 'cover',
     zIndex: '2',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '100%',
     padding: '.25%',
     border: 'solid 10px blue',
     borderRadius: '5%',



   }




   return(
     <div>
     <Link to="/Menu"><img style={shitStyles} src={boneMech} alt="fucked"></img>
     </Link>


     </div>
   );
 }

export default BoneMech ;
