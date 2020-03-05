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
import NavBar from './NavBar.jsx'

function Pictures (props){

return(

 <NavBar/>

  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={s1}
        alt="Portal Smashers Image"
      />
      <Carousel.Caption>
        <h3>Portal Smashers I</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
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
        className="d-block w-100"
        src={s3}
        alt="Portal Smashers Image"
      />

      <Carousel.Caption>
        <h3>Portal Smashers I</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
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
        className="d-block w-100"
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
        className="d-block w-100"
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
        className="d-block w-100"
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
        className="d-block w-100"
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
        className="d-block w-100"
        src={s9}
        alt="Portal Smashers Image"
      />

      <Carousel.Caption>
        <h3>Portal Smashers I</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

);
}

export default Pictures;
