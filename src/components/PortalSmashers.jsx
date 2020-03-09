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
    width: '40%',
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
    fontFamily: 'Inhuman',
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
    fontFamily: 'Inhuman',
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
    <img className="flip-scale-up-hor" style={smashersAddStyles} src={flyertrans} alt="banner"></img>
    </div>
   </div>

  );
}


























export default PortalSmashers;
