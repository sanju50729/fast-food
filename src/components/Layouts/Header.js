import React, { useEffect, useState } from "react";
import '../../styles/HeaderStyle.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../assets/logo/logo.png';
import { Link } from 'react-scroll';

function Header() {
  const [nav, setNav] = useState(false);
 

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeValueOnScroll);
    return () => {
      window.removeEventListener('scroll', changeValueOnScroll);
    };
  }, []);

  return (
    <>
      <header>
        <Navbar expand="lg" className={`${nav ? 'sticky' : ''}`}>
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/" className="logo">
                <img src={Logo} alt="Logo" className="img-fluid" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto cursur">
                <Nav.Link as={Link} to="section1" spy={true} smooth={true} offset={50} duration={500}>Home</Nav.Link>
                <Nav.Link as={Link} to="section2" spy={true} smooth={true} offset={50} duration={500}>About</Nav.Link>
                <Nav.Link as={Link} to="section3" spy={true} smooth={true} offset={50} duration={500}>Our Menu</Nav.Link>
                <Nav.Link as={Link} to="section4" spy={true} smooth={true} offset={50} duration={500}>Shop</Nav.Link>
                <Nav.Link as={Link} to="section5" spy={true} smooth={true} offset={50} duration={500}>Blog</Nav.Link>
                <Nav.Link as={Link} to="section6" spy={true} smooth={true} offset={50} duration={500}>Contact</Nav.Link>
                <Nav.Link href="/">
                  <div className="cart">
                    <i className="bi bi-cart2 fs-5 add">{item}</i>
                    <em className="roundpoint"></em>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
