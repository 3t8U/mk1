import React from 'react';
import { Link } from 'react-router-dom';
import SmashNavBar from './SmashNavBar'
import Logo from './Logo'
import './AboutPS.css';
import wlogo from './images/wlogo.png';
import logo from './images/logo.png';
import { Row  } from 'react-bootstrap';
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

   var homeStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '25%',
    textAlign: 'center',
    imageAlign: 'center',
    color: 'yellow',

    zIndex: '1',
    fontFamily: 'Inhuman',

   };


   return(





       <Link to="/PortalSmashers"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link>
  


     <div style={aboutStyles} className="more">
     <div style={logoStyles}>
      The portal will open on a magical plot of private forest located in the Pacific North Western state of Oregon, USA......
     </div>
     <div style={moreStyles}>
     </div>

     </div>




   );
 }

export default Location;
