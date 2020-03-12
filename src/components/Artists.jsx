import React from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import './Enter.css';
import '../index.css';
import { Navbar, Nav, NavDropdown, Container, Col, Row, Card, Img } from 'react-bootstrap';
import wlogo from './images/wlogo.png';
import logoBack1 from './gifs/logoBack1.gif';
import galaxy1 from './images/galaxy1.jpg';
import questicon from './images/questicon.png';
import { ReactComponent as Icon} from './icons/Icon.svg';
import BoneMech from "./BoneMech.jsx";








function Artists(props){


var cardStyles={
  border: 'solid 3px yellow',
  borderRadius: '5%',
  backgroundColor: 'black',
  width: '18rem',
  margin: '10%',
  padding: '5%',
  fontFamily: 'Inhuman',

}

var homeStyles = {
 display: 'block',
 marginLeft: 'auto',
 marginRight: 'auto',
 marginTop: 'auto',
 marginBottom: 'auto',
 width: '25%',
 textAlign: 'center',
 imageAlign: 'center',
 color: 'yellow',
 backgroundImage: "url(" + {logoBack1} + ")",
 zIndex: '1',
 fontFamily: 'Inhuman',

};

var hStyles={
  zIndex: '1',
  textAlign: 'center',
  margin: '10%',
  fontFamily: 'Inhuman',
  color: 'yellow',
  fontSize: '10vw',
  objectAlign: 'center'
}

var headStyles={
  display: 'block',
  zIndex: '1',
  textAlign: 'center',
  margin: '10%',
  fontFamily: 'Inhuman',
  color: 'yellow',

}

var nameStyles={
  display: 'block',
  zIndex: '1',
  textAlign: 'center',
  margin: '10%',
  fontFamily: 'Inhuman',
  color: 'yellow',
  fontSize: '20px'

}

return(


  <Container>
    <Row style={headStyles}>
    <Link to="/PortalSmashers"><img style={homeStyles} src={wlogo} className="App-mlogo" alt="banner"></img></Link>

    <h1 style={hStyles}>ARTISTS</h1>
    </Row>
    <Row>
     <Col sm={6} md={4}>
       <Card style={cardStyles}>
         <Link to='/BoneMech'><Card.Img variant="top" src={questicon} /></Link>

         <Card.Body>
           <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
           <Card.Text>
             Portal Technician X. Your momentary guide through the portal........
           </Card.Text>
         </Card.Body>

         <Card.Body>
           <Card.Link href="#">Link to Mix</Card.Link>
           <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
        </Card>
     </Col>


     <Col sm={6} md={4}>
       <Card style={cardStyles}>
         <Card.Img variant="top" src={questicon} />
         <Card.Body>
           <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
           <Card.Text>
             Portal Technician X. Your momentary guide through the portal........
           </Card.Text>
         </Card.Body>

         <Card.Body>
           <Card.Link href="#">Link to Mix</Card.Link>
           <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
        </Card>
     </Col>


     <Col sm={6} md={4}>
       <Card style={cardStyles}>
         <Card.Img variant="top" src={questicon} />
         <Card.Body>
           <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
           <Card.Text>
             Portal Technician X. Your momentary guide through the portal........
           </Card.Text>
         </Card.Body>

         <Card.Body>
           <Card.Link href="#">Link to Mix</Card.Link>
           <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
        </Card>
     </Col>
   </Row>


     <Row>
      <Col sm={6} md={4}>
        <Card style={cardStyles}>
          <Card.Img variant="top" src={questicon} />
          <Card.Body>
            <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
            <Card.Text>
              Portal Technician X. Your momentary guide through the portal........
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href="#">Link to Mix</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
         </Card>
      </Col>


      <Col sm={6} md={4}>
        <Card style={cardStyles}>
          <Card.Img variant="top" src={questicon} />
          <Card.Body>
            <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
            <Card.Text>
              Portal Technician X. Your momentary guide through the portal........
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href="#">Link to Mix</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
         </Card>
      </Col>


      <Col sm={6} md={4}>
        <Card style={cardStyles}>
          <Card.Img variant="top" src={questicon} />
          <Card.Body>
            <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
            <Card.Text>
              Portal Technician X. Your momentary guide through the portal........
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href="#">Link to Mix</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
         </Card>
      </Col>
    </Row>



    <Row>
     <Col sm={6} md={4}>
       <Card style={cardStyles}>
         <Card.Img variant="top" src={questicon} />
         <Card.Body>
           <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
           <Card.Text>
             Portal Technician X. Your momentary guide through the portal........
           </Card.Text>
         </Card.Body>

         <Card.Body>
           <Card.Link href="#">Link to Mix</Card.Link>
           <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
        </Card>
     </Col>


     <Col sm={6} md={4}>
       <Card style={cardStyles}>
         <Card.Img variant="top" src={questicon} />
         <Card.Body>
           <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
           <Card.Text>
             Portal Technician X. Your momentary guide through the portal........
           </Card.Text>
         </Card.Body>

         <Card.Body>
           <Card.Link href="#">Link to Mix</Card.Link>
           <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
        </Card>
     </Col>


     <Col sm={6} md={4}>
       <Card style={cardStyles}>
         <Card.Img variant="top" src={questicon} />
         <Card.Body>
           <Card.Title style={nameStyles}>Unknown Artist</Card.Title>
           <Card.Text>
             Portal Technician X. Your momentary guide through the portal........
           </Card.Text>
         </Card.Body>

         <Card.Body>
           <Card.Link href="#">Link to Mix</Card.Link>
           <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
        </Card>
     </Col>
   </Row>





  </Container>



  );
}

export default Artists;
