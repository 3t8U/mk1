import React from 'react';
import './PortalSmashers.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import fbicon from './icons/fbicon.png';
import paticon from './icons/paticon.png';
import emicon from './icons/emicon.png';
import logo from './images/logo.png';
import wlogo from './images/wlogo.png';
import Pictures from './Pictures.jsx';

function FundyNavBar(props) {
  var navBarAddStyles = {
    Color: 'yellow',
    fontWeight: 'bold',
    fontFamily: 'Barriecito',

    maxWidth: '100',
    margin: '10% auto',
    position: 'relative',
    opacity: '.90',
    padding: '10px',
    fontSize: '50px'


   };
   var titleStyle = {
     textAlign: 'center',
     color: 'yellow',
     fontSize: '75px'
   };

   var fbStyles = {
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '50%',
     toppadding:'5%',
     maxWidth: '40px',
     maxHeight: 'auto',


   };

   var patStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    maxWidth: '150px',
    maxHeight: '20%',
    imageAlign: 'center'

   };

   var homeStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    maxWidth: '150px',
    maxHeight: '20%',
    imageAlign: 'center',
    color: 'yellow'

   };


  return (
    <div style={navBarAddStyles}>
    <h1 style={titleStyle}> #GetToTheFundy!</h1>
    <Navbar collapseOnSelect color="yellow" expand="lg" bg="black" variant="dark">
    <Navbar.Brand href="#home"><Link to="/"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <NavDropdown title="THE EVENT" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><Link to="/About">About Portal Smashers</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1"><Link to="/Crew">Location</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Nav className="mr-auto">
      <NavDropdown title="ARTISTS" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.mixcloud.com/Space_Toilet_Radio/pantiestheclown-live-hindsight-2020/" target="_blank">pantiestheclown</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Nav className="mr-auto">
      <NavDropdown title="PICTURES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><Link to="PortalSmashers/Pictures/">Pictures</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>


      <Nav className="mr-auto">
        <NavDropdown title="CONTACT US" id="collasible-nav-dropdown">
          <NavDropdown.Item href="mailto:Cascadiapsyscouts@gmail.com"><img style={fbStyles} src={emicon} alt="banner"></img></NavDropdown.Item>
          <NavDropdown.Item href="https://www.facebook.com/cascadiapsyscouts/" target="_blank"><img style={fbStyles} src={fbicon} alt="banner"></img></NavDropdown.Item>
          <NavDropdown.Item href="https://www.patreon.com/cascadiapsyscouts" target="_blank"><img style={patStyles} src={paticon} alt="banner"></img></NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
      <NavDropdown title="LINKS...." id="collasible-nav-dropdown">
        <NavDropdown.Item href="http://starcampshasta.com/" target="_blank">Star Camp Shasta</NavDropdown.Item>
        <NavDropdown.Item href="https://www.facebook.com/groups/2329159873863593/" target="_blank">Siskiyou Psytrance</NavDropdown.Item>
        <NavDropdown.Item href="https://www.facebook.com/events/206778827143953/" target="_blank">Montana Magic Mountain Collective</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1"><Link to="/Video">U.T.T.A. Chaos</Link></NavDropdown.Item>
        <NavDropdown.Item href="https://www.absolutshitrecords.com/" target="_blank">Absolut Shit Records</NavDropdown.Item>
        <NavDropdown.Item href="http://anomalisticrecords.com/" target="_blank">Anomalistic Records</NavDropdown.Item>
        <NavDropdown.Item href="https://ektoplazm.com/" target="_blank">Ektoplazm</NavDropdown.Item>
        <NavDropdown.Item href="https://www.fractaltribe.org/" target="_blank">Fractal Tribe</NavDropdown.Item>
        <NavDropdown.Item href="https://www.cascadiapsychedelic.com/" target="_blank">Cascadia Psychedelic</NavDropdown.Item>
        <NavDropdown.Item href="https://www.facebook.com/VJNels0nMandala/" target="_blank">VJ Nelson Mandala</NavDropdown.Item>
        <NavDropdown.Item href="https://www.facebook.com/omgalaser/" target="_blank">OMG a Laser</NavDropdown.Item>
      </NavDropdown>
      </Nav>

      <Navbar.Brand href="#home"><Link to="/"><img style={homeStyles} src={wlogo}className="App-mlogo"  alt="banner"></img></Link></Navbar.Brand>
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default FundyNavBar
