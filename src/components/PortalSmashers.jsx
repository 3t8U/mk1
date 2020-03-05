import React from 'react';
import smashers from './images/smashers.jpg'
import stage from './images/stage.jpg';
import flyertrans from './images/flyertrans.png';
import './PortalSmashers.css';
import SmashNavBar from './SmashNavBar.jsx'

function PortalSmashers(props) {
  var smashersAddStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    padding: '.25%',
    border:'15px solid black',
    opacity: '.85',
    blurRadius: '10px',
    border: 'solid 10px blue',
    borderRadius: '5%',
    filter: "invert(1)",

  };

  var linkAddStyles ={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    color:'#FFD300',
    fontSize: '100px',
    fontWeight: 'bolder',
    fontFamily: 'Green Fuz V1',
    textAlign: 'center',

  };

  var miniLinkAddStyles ={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    color:'#FFD300',
    fontSize: '75px',
    fontWeight: 'bolder',
    fontFamily: 'Green Fuz V1',
    textAlign: 'center'
  };

  var bannerStyle= {
    backgroundImage: "url(" + {stage} + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto'
  }
  console.log(props.selected);
  return (

    <div className="overLord">
    <SmashNavBar/>
    <div className="banner">
    <img style={smashersAddStyles} src={flyertrans} alt="banner"></img>
    <h1><a style={linkAddStyles}href="https://www.facebook.com/events/somewhere-in-the-forest-of-the-cascadia-wilderness/portal-smashers-2020-the-re-smashing/413441849352546/">Portal Smashers II</a></h1>
    <p style={miniLinkAddStyles}>"The Re-Smashing" </p>
    </div>
   </div>

  );
}


























export default PortalSmashers;
