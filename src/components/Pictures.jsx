import React from 'react';
import { Navbar, Nav, NavDropdown, Carousel, Caption,  } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom';
import 1 from './smashimages/1.jpg'
import 2 from './smashimages/2.jpg'
import 3 from './smashimages/3.jpg'
import 4 from './smashimages/4.jpg'
import 5 from './smashimages/5.jpg'
import 6 from './smashimages/6.jpg'
import 7 from './smashimages/7.jpg'
import 8 from './smashimages/8.jpg'
import 9 from './smashimages/9.jpg'
import 10 from './smashimages/10.jpg'
import 11from './smashimages/11.jpg'
import 1 from './smashimages/1.jpg'

function Pictures (props){

return(

  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

export default Pictures;
