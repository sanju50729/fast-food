import React, { useEffect, useState } from "react";
import '../../styles/HeaderStyle.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import Logo from '../../assets/logo/logo.png';
import { Link } from 'react-scroll';
function Header(){
  const [nav,SetNav]=useState(false);
  const [item,SetItem]=useState('0');

  const location = useLocation();
  const { title } = location.state || {};
  const changeValueoOnScroll = ()=>{
   const ScrollValue=document?.documentElement?.scrollTop;
   ScrollValue >100 ? SetNav(true) : SetNav(false);
  };

  window.addEventListener('scroll', changeValueoOnScroll)

    useEffect(()=>{
      SetItem(title);
    },);
    return(
        <>
        <header>
       <Navbar expand="lg" className={`${nav === true ? 'sticky' : ''}`} >
      <Container>
        <Navbar.Brand href="#home">
          <Link to='/' className="logo">
          <img src={Logo} alt="Logo" className="img-fluid" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto cursur" >
            <Nav.Link as={Link}  to="section1" spy={true} smooth={true} offset={50}duration={50} >Home</Nav.Link>
            <Nav.Link as={Link} to="section2" spy={true} smooth={true} offset={50}duration={50}>About</Nav.Link>
            <Nav.Link as={Link} to="section2" spy={true} smooth={true} offset={50}duration={50}>Our Menu</Nav.Link>
            <Nav.Link as={Link}  to="section3" spy={true} smooth={true} offset={50}duration={50}>Shop</Nav.Link>
            <Nav.Link as={Link}  to="blog" spy={true} smooth={true} offset={50}duration={50}>Blog</Nav.Link>
            <Nav.Link as={Link}  to="contact" spy={true} smooth={true} offset={50}duration={50}>Contact</Nav.Link>
            <Nav.Link as={Link} to='/'>
               <div className="cart">
               <i class="bi bi-cart2 fs-5 add">
                
                {item}
               </i>
               <em className="roundpoint"></em>
               </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
      </>
    )
}
export default Header;