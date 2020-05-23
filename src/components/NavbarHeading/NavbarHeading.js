import React from 'react'
import "./NavbarHeading.css"
import {Navbar,Nav} from 'react-bootstrap'
import logo from "../../assets/logo.png";

const NavbarHd = ()=> {
  return (
  <Navbar>
  <Navbar.Brand md={6} xs={6}>
  <img
        src={logo}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="Fakery"
      />
</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end" md={6} xs={6}>
  <Nav.Link >Home</Nav.Link>
  <Nav.Link >About</Nav.Link>
  <Nav.Link >Liecnce</Nav.Link>
  <Nav.Link >Support</Nav.Link>
   <Nav.Link >Contact <span className="fa fa-user-circle"></span> </Nav.Link>
   <Nav.Link >Members <span className="fa fa-search"></span>  </Nav.Link>
  </Navbar.Collapse>
</Navbar>
 
  )
}

export default NavbarHd