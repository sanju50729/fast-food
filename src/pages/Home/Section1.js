
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-scroll";
import '.././../index.css';
import '../../styles/HomeStyle.css';
import { useEffect } from "react";
import AOS from "aos";

function Section1(){
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
     <section className="hero_section cursur">
      
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
              Savor our latest burgers, now featuring perfectly sautéed onions and rich caramelized onions. 
              The combination of savory and sweet adds
               a delicious depth to every bite. Don't miss out on this flavor-packed upgrade!
              </p>
              <section data-aos=''>
              <Link className="order_now" to="section3" spy={true} smooth={true} offset={50}duration={50} >
                Order Now
              </Link>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section> 

  );
};

export default Section1;
