import React from 'react';
import { Link } from 'react-router-dom';
import stage from './images/stage.jpg'
import './AboutPS.css';
import './PortalSmashers.css';
import wlogo from './images/wlogo.png';
import logoBack1 from './gifs/logoBack1.gif';
import SmashNavBar from './SmashNavBar.jsx';
import MoreTrouble from './MoreTrouble.jsx'









function AboutPS () {

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

  }

  var tagStyles ={
    color: 'yellow',

    fontFamily: 'Inhuman',
    borderColor: 'yellow',
    marginTop: '20px',
    fontSize: '65px',
    textAlign: 'center',
    textShadow: '3px 2px red',

    }
    var titStyles ={
      color: 'yellow',

      fontFamily: 'Inhuman',
      borderColor: 'yellow',
      marginTop: '20px',
      fontSize: '80px',
      textAlign: 'center',
      textShadow: '3px 2px red',

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
     backgroundImage: "url(" + {logoBack1} + ")",
     zIndex: '1',
     fontFamily: 'Inhuman',

    };

return(







  <div className="navi">
  <Link to="/PortalSmashers"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link>
  <h1 style={titStyles}> Portal Smashers II: "The Re-Smashing"</h1>
  <h1 style={tagStyles}> JULY 5th-7th 2020</h1>
    <Link to="/MoreTrouble"><div style={aboutStyles} className="further">


  Mark you calendars as we begin preparations for the second edition of Portal Smashers!: the Re-Smashing

  Stay tuned, updates coming early 2020.

  Be prepared for a special gathering in the Cascadian  Wilderness. Not to be missed.

  For booking inquires, participation, volunteering and offering of workshops  and all general questions please contact us here or at cascadiapsyscouts@gmail.com

  Pre-sales will arriving soon .

  Transmissions are being decoded now.
  Stay tuned for details.

  Please share this information with your alien tribes.



  </div></Link>
  </div>


);
}

export default AboutPS;
