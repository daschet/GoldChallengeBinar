import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function MenuAtas(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Binar</NavbarBrand>
        <div className='navtext'>
              <NavbarText >Our Services</NavbarText>
              <span></span>
              <NavbarText >Why Us</NavbarText>
              <span></span>
              <NavbarText >Testimonial</NavbarText>
              <span></span>
              <NavbarText >FAQ</NavbarText>
        </div>
      </Navbar>
    </div>
  );
}
  
  export default MenuAtas;