import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";
import AOS from "aos";
import { useEffect } from "react";
function Section4() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 200,
      once: false,
      mirror: true, 
    });
  }, []);
  return (
    <>
      <section className="promotion_section" id="blog" data-aos='fade-right'>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Burgers have a unique way of turning any meal into a shared experience. 
              Whether you’re grilling in the backyard, dining out, or simply enjoying a quick bite, burgers offer the perfect mix of
               flavor and fun, making them a favorite for gatherings and good times.
              </p>
              <ul>
                <li>
                  <p>
                  Irresistible Flavor: A well-made burger is hard to resist, making it a crowd-pleaser.
                  </p>
                </li>
                <li>
                  <p>Endless Variety: With countless combinations of toppings and sauces, there’s a burger for everyone.</p>
                </li>
                <li>
                  <p>
                  Comfort Food: Burgers provide a sense of comfort and nostalgia, bringing people closer.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;