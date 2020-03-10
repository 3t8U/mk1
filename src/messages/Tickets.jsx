import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Logo from './Logo'
import wlogo from './images/wlogo.png';
import logo from './images/logo.png';
import logoBack1 from './gifs/logoBack1.gif';
import './Enter.css';
import '../index.css';

import { Navbar, Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';

 function Tickets() {

var contStyles={
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  maxWidth: '150px',
  maxHeight: '20%',
  imageAlign: 'center',
  color: 'yellow'
}

var homeStyles = {
 display: 'block',
 marginLeft: 'auto',
 marginRight: 'auto',
 marginTop: 'auto',
 marginBottom: 'auto',
 width: '75%',
 maxWidth: '150px',
 maxHeight: '20%',
 imageAlign: 'center',
 color: 'yellow',
 padding: '10%',
 backgroundImage: "url(" + {logoBack1} + ")",
 zIndex: '2',


};

var massStyles={
  display: 'flex',
  justifyContent: 'center',
  itemAlign: 'center',
  padding: '20%',
  textAlign: 'center',
  color: 'yellow',
  fontFamily: 'Inhuman',
  fontSize: '50px'
}

var centerIsleStyles ={
  display: 'flex',
  justifyContent: 'center',
  itemAlign: 'center',
  paddingTop: '1%',
  image: "url(" + {logoBack1} + ")",
  zIndex: '1',

}

var onStyles={
  paddingBottom: '5%',
  paddingLeft: '2%',
  marginTop: '5%',
  width: '75%',



}
var thStyles={
  paddingBottom: '5%',
  paddingRight: '2%',
  marginTop: '5%',
  width: '75%',

}

var seStyles={
  paddingTop: '5%',
  paddingLeft: '2%',
  marginBottom: '5%',
  width: '75%',
}

var niStyles={
  paddingTop: '5%',
  paddingRight: '2%',
  marginBottom: '5%',
  width: '75%',

}

var oneStyles ={
    fontSize: '100px'
}


   return(

     <div style={massStyles}>
     <Container  >
  <Row >
      <div> <h1 style={oneStyles}> PRESALES COMING SOON! </h1></div>
  </Row>

  <Row>
    <Col >
      <div > </div>
    </Col>
    <Col lg={6} style={centerIsleStyles} className="trash" >
      <div>
      <Link to="/PortalSmashers"><img src={logo} className="App-logo" alt="logo" /></Link>

      </div>
    </Col>
    <Col >
      <div> </div>
    </Col>
  </Row>

  <Row>
    <Col style={seStyles}>

    </Col>
    <Col >
      <div> </div>
    </Col>
    <Col style={niStyles}>

    </Col>
  </Row>
</Container>
 </div>

   );
 }

export default Tickets;
