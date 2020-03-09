import React from 'react';
import Logo from './Logo.jsx';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'
import bgmask from './gifs/bgmask.gif'
import matrixTrans1 from './gifs/matrixTrans1.gif'
import './PortalSmashers.css';

 function MoreTrouble
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

   var someStyles ={
     size: 'cover',
     zIndex: '3',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '100%',
     padding: '.25%',
     backgroundImage:"url(" + {matrixTrans1} + ")",




   }




   return(
     <div style={someStyles}>
     <Link to="/PortalSmashers"><img style={shitStyles} src={bgmask} alt="fucked"></img>
     </Link>


     </div>
   );
 }

export default MoreTrouble
;
