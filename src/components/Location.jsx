import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Logo from './Logo'
import './AboutPS.css';
import forest from './gifs/forest.gif';
import logo from './images/logo.png';

 function Location() {

   var aboutStyles ={
     color: 'yellow',
     fontWeight: 'bold',
     fontFamily: 'Inhuman',
     border: '10px solid yellow',
     borderRadius: '5%',
     borderColor: 'yellow',
     padding: '12%',
     margin: '10vh',
     fontSize: '30px',
     textShadow: '3px 2px red',
     display: 'flex',
     justifyContent: 'center',
     itemAlign: 'center',


   }

   var logoStyles ={
     color: 'yellow',
     fontWeight: 'bold',
     fontFamily: 'Inhuman',
     display: 'flex',
     justifyContent: 'center',
     itemAlign: 'center',
     textShadow: '3px 2px red',

   }

   var moreStyles ={
     color: 'yellow',

     fontFamily: 'Inhuman',
     paddingTop: '10%',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',

   }


   return(


     <div style={aboutStyles} className="more">
     <div style={logoStyles}>
      The portal will open on a magical plot of private forest located in the Pacific North Western state of Oregon, USA......
     </div>
     <div style={moreStyles}>
     <Link to="/PortalSmashers"><img src={logo} className="App-logo" alt="logo" /></Link>
     </div>

     </div>




   );
 }

export default Location;
