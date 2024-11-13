import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

function Section7() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 200,
      once: false,
      mirror: true, 
    });
    AOS.refresh();
  }, []);
  return (
    <section className="contact_section" id="contact" data-aos='fade-left'>
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
            Craving a burger? Enjoy our delicious burgers delivered to your door in just 30 minutes or less!
             We’re committed to fast and fresh service. If we’re late, your meal is on us!
            </p>
            <section data-aos='flip-left'>
            <Link to={`tel:${'8569950729'}`} className=" order_now btn_red"  >
              Call: 85699-50729
            </Link>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;