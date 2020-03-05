import React from 'react';
import { Navbar, Nav, NavDropdown, Carousel, Caption,  } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom';
import s1 from './smashimages/s1.jpg';
import s2 from './smashimages/s2.jpg';
import s3 from './smashimages/s3.jpg';
import s4 from './smashimages/s4.jpg';
import s5 from './smashimages/s5.jpg';
import s6 from './smashimages/s6.jpg';
import s7 from './smashimages/s7.jpg';
import s8 from './smashimages/s8.jpg';
import s9 from './smashimages/s9.jpg';
import s10 from './smashimages/s10.jpg';
import s11 from './smashimages/s11.jpg';
import SmashNavBar from './SmashNavBar.jsx'
import './PortalSmashers.css';

function Pictures (props){
 var caroStyles={
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 'auto',
   marginBottom: 'auto',
   position: 'relative',
   imageSize: 'cover',

 }

 var imgStyles={
   maxWidth: '1000px',
   minWidth: '600px',
   height: 'auto',
   minHeight: '500px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 'auto',
   marginBottom: 'auto',
   position: 'relative',
   imageSize: 'cover',
   border: 'solid 10px yellow',
   borderRadius: '5%'

 }
return(

 <div>
 <SmashNavBar/>


  <div style={caroStyles}>
 <Carousel>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s3}
       alt="Portal Smashers Image"
     />
     <Carousel.Caption>

     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s2}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s4}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s1}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s5}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s6}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s7}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s8}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100" style={imgStyles}
       src={s9}
       alt="Portal Smashers Image"
     />

     <Carousel.Caption>
       <h3>Portal Smashers I</h3>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
 </div>
 </div>


);
}


export default Pictures;
