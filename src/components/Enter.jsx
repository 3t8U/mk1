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
 width: '50%',
 maxWidth: '150px',
 maxHeight: '20%',
 imageAlign: 'center',
 color: 'yellow'

};


   return(
     <Container >
  <Row>
    <Col lg={4}>1
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
    <Col lg={4}>2
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
    <Col lg={4}>3
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
  </Row>

  <Row>
    <Col lg={4}>4
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
    <Col lg={4}>5
      <div>
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>
    </Col>
    <Col lg={4}>6
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
  </Row>

  <Row>
    <Col lg={4}>7
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
    <Col lg={4}>8
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
    <Col lg={4}>9
      <div> <img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></div>
    </Col>
  </Row>
</Container>










   );
 }

export default Start;
