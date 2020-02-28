import React from 'react';
import { ButtonGroup, Button, Dropdown, DropdownButton, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

export default props => {
 var sideBarStyles = {
objectAlign: 'left',

 }


  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
