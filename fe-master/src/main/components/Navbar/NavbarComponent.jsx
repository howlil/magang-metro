import {Navbar, Container, Nav} from "react-bootstrap"
import {navLinks} from "../../data/dataNavbar"
import { NavLink } from "react-router-dom"
import style from "../Navbar/navbar.module.css"
import Logo from "../../../components/Logo/Logo";
import {useState, useEffect} from "react"

const NavbarComponent = () => {

  return (
    <div >
      <Navbar expand="lg" className={style.navbar}>
      <Container>
        <Navbar.Brand href="#home"><Logo></Logo></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={style.navlink}>
            {navLinks.map((link) => {
              return (
              <div key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </div>
              )
            })}            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent