import React from 'react';
import { Link } from 'react-router-dom';
import stage from './stage.jpg'
import './About.css';
import NavBar from './NavBar.jsx';



function About() {
  var aboutStyles ={
    color: 'yellow',
    fontWeight: 'bold',
    fontFamily: 'Barriecito',
    border: '10px solid yellow',
    borderRadius: '50%',
    borderColor: 'yellow',
    padding: '12%',
    margin: '10vh',
    fontSize: '30px',

    textShadow: '3px 2px red',






  }

  var tagStyles ={
    color: 'yellow',
    fontWeight: 'bold',
    fontFamily: 'Barriecito',
    borderColor: 'yellow',
    marginTop: '20px',
    fontSize: '45px',
    textAlign: 'center',
    textShadow: '3px 2px red',

    }




return(

<div>
<NavBar/>
<h1 style={tagStyles}> We are the junkies of sound system culture.....</h1>
<div style={aboutStyles} className="further">
CascadiaPsyScouts is a collective of Psychedelic Trance enthusiasts dedicated to keeping psytrance psychedelic, underground, and in the forest! We are located in the Cascadia Bioregion and host an annual gathering called Portal Smashers. The gathering is intended to stimulate the deeper regions of the human experience and explore the outer realms of sound and light through music and samadhi dance.
</div>
<div>

</div>
</div>
);
}

export default About;
