import React from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import './Enter.css';
import { Navbar, Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';
import wlogo from './images/wlogo.png';


 function Start() {
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


};

var massStyles={
  display: 'flex',
  justifyContent: 'center',
  itemAlign: 'center',
  padding: '20%',
  textAlign: 'center',
  color: 'yellow',
}

var centerIsleStyles ={
display: 'flex',
}

var onStyles={
  paddingBottom: '5%',
  paddingLeft: '10%',
  marginTop: '5%',


}
var thStyles={
  paddingBottom: '5%',
  paddingRight: '10%',
  marginTop: '5%',

}

var seStyles={
  paddingTop: '10%',
  paddingLeft: '10%',
  marginBottom: '5%',
}

var niStyles={
  paddingTop: '10%',
  paddingRight: '10%',
  marginBottom: '5%',

}


   return(
     <div style={massStyles}>
     <Container  >
  <Row >
    <Col md={4} style={onStyles}>
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img>EVENTS</div>
    </Col>
    <Col md={4}>2
      <div> </div>
    </Col>
    <Col md={4}  style={thStyles}>
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img>LINKS...</div>
    </Col>
  </Row>

  <Row>
    <Col md={4} >4
      <div > </div>
    </Col>
    <Col lg={6} style={centerIsleStyles}>
      <div>
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>
    </Col>
    <Col md={4}>6
      <div> </div>
    </Col>
  </Row>

  <Row>
    <Col md={4} style={seStyles}>7
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img>MAKE CONTACT</div>
    </Col>
    <Col md={4}>8
      <div> </div>
    </Col>
    <Col md={4} style={niStyles}>9
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img>ABOUT</div>
    </Col>
  </Row>
</Container>
 </div>









   );
 }

export default Start;
