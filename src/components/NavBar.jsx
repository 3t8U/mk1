import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './PortalSmashers.css';
import { Link } from 'react-router-dom';
import fbicon from './icons/fbicon.png';
import paticon from './icons/paticon.png';
import emicon from './icons/emicon.png';
import wlogo from './images/wlogo.png';

function NavBar(props) {
  var navBarAddStyles = {
    Color: 'yellow !important',

    fontFamily: 'Inhuman',
    zIndex: '1',
    maxWidth: '100',
    margin: '10% auto',
    position: 'relative',
    opacity: '.90',

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
    paddingBottom: '10%',
    width: '50%',
    maxWidth: '150px',
    maxHeight: '20%',
    imageAlign: 'center',
    color: 'yellow'


  };

  return (
    <div fixed="top"style={navBarAddStyles}>
    <h1 style={titleStyle}>
    <Navbar.Brand href="#home"><Link to="/Menu"><img style={homeStyles} src={wlogo} className="App-mlogo"  alt="banner"></img>
    </Link></Navbar.Brand>
    PsyScouts Virtual Den
    <Navbar.Brand href="#home"><Link to="/Trouble"><img style={homeStyles} src={wlogo} className="App-mlogo"  alt="banner">
    </img></Link></Navbar.Brand></h1>

    <Navbar  collapseOnSelect  expand="lg" bg="black" variant="dark" color="yellow !important">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
    <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1"><Link to="/About"  className="link">ABOUT US</Link></NavDropdown.Item>
    </NavDropdown>
    </Nav>

    <Nav className="mr-auto" color="yellow">
    <NavDropdown title="EVENTS" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1"><Link to="/PortalSmashers">Portal Smashers</Link></NavDropdown.Item>
    </NavDropdown>
    </Nav>

    <Nav className="mr-auto">
    <Nav.Link href="#home"><Link to="/Pictures" className="link">PICTURES</Link></Nav.Link>
    </Nav>

    <Nav className="mr-auto">
    <Nav.Link href="#home"><Link to="/MessageBoard" className="link">MESSAGE BOARD</Link></Nav.Link>
    </Nav>


    <Nav className="mr-auto">
    <NavDropdown title="CONTACT" id="collasible-nav-dropdown">
    <NavDropdown.Item href="mailto:Cascadiapsyscouts@gmail.com"><img style={fbStyles} src={emicon} alt="banner"></img></NavDropdown.Item>
    <NavDropdown.Item href="https://www.facebook.com/cascadiapsyscouts/" target="_blank"><img style={fbStyles} src={fbicon} alt="banner"></img></NavDropdown.Item>
    <NavDropdown.Item href="https://www.patreon.com/portalsmashers" target="_blank"><img style={patStyles} src={paticon} alt="banner"></img></NavDropdown.Item>
    </NavDropdown>
    </Nav>


    <Nav className="mr-auto">
    <NavDropdown title="LINKS...." id="collasible-nav-dropdown">
    <NavDropdown.Item href="http://starcampshasta.com/" target="_blank">Star Camp Shasta</NavDropdown.Item>
    <NavDropdown.Item href="https://www.facebook.com/groups/2329159873863593/" target="_blank">Siskiyou Psytrance</NavDropdown.Item>
    <NavDropdown.Item href="https://www.facebook.com/events/206778827143953/" target="_blank">Montana Magic Mountain Collective</NavDropdown.Item>
    <NavDropdown.Item href="https://www.absolutshitrecords.com/" target="_blank">Absolut Shit Records</NavDropdown.Item>
    <NavDropdown.Item href="http://anomalisticrecords.com/" target="_blank">Anomalistic Records</NavDropdown.Item>
    <NavDropdown.Item href="https://ektoplazm.com/" target="_blank">Ektoplazm</NavDropdown.Item>
    <NavDropdown.Item href="https://www.fractaltribe.org/" target="_blank">Fractal Tribe</NavDropdown.Item>
    <NavDropdown.Item href="https://www.cascadiapsychedelic.com/" target="_blank">Cascadia Psychedelic</NavDropdown.Item>
    <NavDropdown.Item href="https://www.facebook.com/VJNels0nMandala/" target="_blank">VJ Nelson Mandala</NavDropdown.Item>
    <NavDropdown.Item href="https://www.facebook.com/omgalaser/" target="_blank">OMG a Laser</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.1"><Link to="/Video">U.T.T.A. Chaos</Link></NavDropdown.Item>

    </NavDropdown>
    </Nav>

    </Navbar.Collapse>
    </Navbar>
    </div>
  );
}




export default NavBar
