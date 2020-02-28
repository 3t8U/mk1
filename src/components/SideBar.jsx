import React from 'react';
import { ButtonGroup, Button, Dropdown, DropdownButton, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SideBar(props) {
  var navBarAddStyles = {
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontFamily: 'BowlbyOneSC',
    width: '80%',
    margin: '0 auto',



   };
  return (
    <div>
<ButtonGroup vertical expand="lg" bg="black" variant="dark">
  <Button>Button</Button>
  <Button>Button</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <Button>Button</Button>
  <Button>Button</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <Nav className="mr-auto">
  <NavDropdown title="About" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">How to play</NavDropdown.Item>
        </NavDropdown>
      </Nav>
</ButtonGroup>
</div>
);
}

export default SideBar;
