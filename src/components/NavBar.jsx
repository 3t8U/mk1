import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom';
import fbicon from './fbicon.png';
import paticon from './paticon.png';
import emicon from './emicon.png';
import logo from '../logo.png';
import wlogo from './wlogo.png';

function NavBar(props) {
  var navBarAddStyles = {
    Color: 'yellow !important',
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
     fontSize: '75px',
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
    <div fixed="top"style={navBarAddStyles}>
    <h1 style={titleStyle}> PsyScouts Virtual Den</h1>
    <Navbar  collapseOnSelect  expand="lg" bg="black" variant="dark" color="yellow !important">
    <Navbar.Brand href="#home"><Link to="/"><img style={homeStyles} src={wlogo} alt="banner"></img></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" color="yellow !important"><Link to="/About">About Us</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1"><Link to="/Crew">Crew</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Nav className="mr-auto">
      <NavDropdown title="EVENTS" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><Link to="/PortalSmashers">Portal Smashers</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Nav className="mr-auto">
      <NavDropdown title="CONTACT" id="collasible-nav-dropdown">
        <NavDropdown.Item href="mailto:Cascadiapsyscouts@gmail.com"><img style={fbStyles} src={emicon} alt="banner"></img></NavDropdown.Item>
        <NavDropdown.Item href="https://www.facebook.com/cascadiapsyscouts/" target="_blank"><img style={fbStyles} src={fbicon} alt="banner"></img></NavDropdown.Item>
        <NavDropdown.Item href="https://www.patreon.com/cascadiapsyscouts" target="_blank"><img style={patStyles} src={paticon} alt="banner"></img></NavDropdown.Item>
      </NavDropdown>
    </Nav>






      <Nav className="mr-auto">
        <NavDropdown title="PARTNERS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="https://www.facebook.com/cascadiapsyscouts/" target="_blank">Cascadia Psy Scouts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1"><Link to="/Video">U.T.T.A. Chaos</Link></NavDropdown.Item>
          <NavDropdown.Item href="https://www.mixcloud.com/Space_Toilet_Radio/pantiestheclown-live-hindsight-2020/" target="_blank">pantiestheclown</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Navbar.Brand href="#home"><Link to="/"><img style={homeStyles} src={wlogo} alt="banner"></img></Link></Navbar.Brand>
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default NavBar
