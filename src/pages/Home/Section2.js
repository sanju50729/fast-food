import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-scroll';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
import AOS from "aos";
import { useEffect } from "react";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Savor the Original Burger! Enjoy our classic burger, crafted with high-quality ingredients for a timeless, mouthwatering experience. Pure, unadulterated deliciousness in every bite!

`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Quality You Can Taste! We use only the finest ingredients to bring you meals that are fresh, flavorful, and crafted with care. Every bite is a testament to our commitment to excellence.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Fastest Delivery Guaranteed! Enjoy your favorite meals delivered hot and fresh to your door in record time. We're dedicated to getting your food to you faster and fresher than ever.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
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
    
      <section className="about_section cursur" id="section2" data-aos="fade-right" >
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center" >
              <h2  >The burger tastes better when you eat it with your family</h2>
           

                 
       
              <p>
              Burgers Taste Better with Family! Enjoy our 
              delicious burgers with your loved ones for a meal
               that’s even more satisfying and memorable. Gather around and make 
               it a burger night to remember!


              </p>
            
                <section data-aos="flip-left">
              <Link to="section3"  spy={true} smooth={true} offset={50}duration={50}  className="order_now btn_red" data-aos="flip-right">
                Explore Full Menu
              </Link>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper" data-aos='fade-left'>
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;