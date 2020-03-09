import React from 'react';
import { Link } from 'react-router-dom';
import stage from './images/stage.jpg'
import './AboutPS.css';
import './PortalSmashers.css';

import SmashNavBar from './SmashNavBar.jsx';










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
    fontWeight: 'bold',
    fontFamily: 'Inhuman',
    borderColor: 'yellow',
    marginTop: '20px',
    fontSize: '65px',
    textAlign: 'center',
    textShadow: '3px 2px red',

    }


return(


  <div className="navi">
  <SmashNavBar/>
  <h1 style={tagStyles}> JULY 5th-7th 2020</h1>
  <div style={aboutStyles} className="further">


  Mark you calendars as we begin preparations for the second edition of Portal Smashers!: the Re-Smashing

  Stay tuned, updates coming early 2020.

  Be prepared for a special gathering in the Cascadian  Wilderness. Not to be missed.

  For booking inquires, participation, volunteering and offering of workshops  and all general questions please contact us here or at cascadiapsyscouts@gmail.com

  Pre-sales will arriving soon .

  Transmissions are being decoded now.
  Stay tuned for details.

  Please share this information with your alien tribes.



  </div>
  </div>


);
}

export default AboutPS;
