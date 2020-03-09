
import React from 'react';
import './PortalSmashers.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../index.css';
import GoogleFontLoader from 'react-google-font-loader';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import fbicon from './icons/fbicon.png';
import paticon from './icons/paticon.png';
import emicon from './icons/emicon.png';
import logo from './images/logo.png';
import wlogo from './images/wlogo.png';
import Pictures from './Pictures.jsx';

function SmashNavBar(props) {
  var navBarAddStyles = {
    Color: 'yellow',
    fontWeight: 'bold',
    fontFamily: 'Inhuman',
    zIndex: '1',
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
    <h1 style={titleStyle}><Navbar.Brand href="#home"><Link to="/Menu"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link></Navbar.Brand> PORTAL SMASHERS II: "The Re-Smashing"<Navbar.Brand href="#home"><Link to="/Menu"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link></Navbar.Brand></h1>
    <Navbar collapseOnSelect color="yellow" expand="lg" bg="black" variant="dark">

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <NavDropdown title="THE EVENT" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1"><Link to="/AboutPS">About Portal Smashers</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1"><Link to="/Location">Location</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/Artists" className="link">ARTISTS</Link></Nav.Link>
    </Nav>


    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/Tickets" className="link">TICKETS</Link></Nav.Link>
    </Nav>





      <Nav className="mr-auto">
        <NavDropdown title="CONTACT US" id="collasible-nav-dropdown">
          <NavDropdown.Item href="mailto:Cascadiapsyscouts@gmail.com"><img style={fbStyles} src={emicon} alt="banner"></img></NavDropdown.Item>
          <NavDropdown.Item href="https://www.facebook.com/cascadiapsyscouts/" target="_blank"><img style={fbStyles} src={fbicon} alt="banner"></img></NavDropdown.Item>
          <NavDropdown.Item href="https://www.patreon.com/portalsmashers" target="_blank"><img style={patStyles} src={paticon} alt="banner"></img></NavDropdown.Item>
        </NavDropdown>
      </Nav>


    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default SmashNavBar
