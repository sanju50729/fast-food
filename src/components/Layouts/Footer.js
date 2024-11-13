import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";


function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: false,
      mirror: true, 
    });
  }, []);
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer data-aos='fade-right'>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>🍔 Tasty Burgurs 🍔</p>
                <p>Near Softech Infoways,Surkhab Chowk, Sirsa</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Contact and Order now and Enjoy</p>
                <p>
                  <Link to="tel:82220-98246" className="calling">
                  <i class="bi bi-telephone-forward">&nbsp; 85699-50729</i>
                  </Link>
                      </p>
                      <p>
                  <Link to={'mailto:rnimel5@gmail.com'} className="calling">
                  <i class="bi bi-envelope-at">&nbsp; sanju66081@gmail.com</i>
                 </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Stay connected for updates and more details</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <a href="https://github.com/sanju50729">
                    <i class="bi bi-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;