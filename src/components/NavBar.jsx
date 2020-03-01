import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom';


function NavBar(props) {
  var navBarAddStyles = {
    Color: 'yellow',
    fontWeight: 'bold',
    fontFamily: 'Barriecito',

    maxWidth: '100',
    margin: '10% auto',
    position: 'relative',
    opacity: '.5',
    padding: '10px',
    fontSize: '50px'


   };
   var titleStyle = {
     textAlign: 'center',
     color: 'yellow',
     fontSize: '75px'
   };


  return (
    <div style={navBarAddStyles}>
    <h1 style={titleStyle}> PsyScouts Virtual Den</h1>
    <Navbar collapseOnSelect color="yellow" expand="lg" bg="black" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><Link to="/About">About Us</Link></NavDropdown.Item>
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
        <NavDropdown.Item href="#action/3.1"><Link to="/Contact">Drop us a line....</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>






      <Nav className="mr-auto">
        <NavDropdown title="PARTNERS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="https://www.facebook.com/cascadiapsyscouts/">Cascadia Psy Scouts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1"><Link to="/Video">U.T.T.A. Chaos</Link></NavDropdown.Item>
          <NavDropdown.Item href="https://www.mixcloud.com/Space_Toilet_Radio/pantiestheclown-live-hindsight-2020/">pantiestheclown</NavDropdown.Item>
        </NavDropdown>
      </Nav>


    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default NavBar
