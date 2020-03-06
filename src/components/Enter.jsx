import React from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import './Enter.css';


 function Start() {




   return(
     <Container>
  <Row>
    <Col md="auto">1

    </Col>
    <Col md="auto">2
    </Col>
    <Col md="auto">3
    </Col>
  </Row>
  <Row>
    <Col md="auto">4
    </Col>
    <Col md="auto">5
    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
    </Col>
    <Col md="auto">6
    </Col>
  </Row>
  <Row>
    <Col md="auto">7
    </Col>
    <Col md="auto">8
    </Col>
    <Col md="auto">9
    </Col>
  </Row>
</Container>









     <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
   );
 }

export default Start;
