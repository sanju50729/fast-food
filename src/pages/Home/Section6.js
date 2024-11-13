import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";
import { useEffect } from "react";
import AOS from "aos";

function Section6() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 200,
      once: false,
      mirror: true, 
    });
  }, []);
  return (
    <section className="blog_section" data-aos='fade-right'>
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  " Absolutely delicious! The burgers were juicy, flavorful,
                   and cooked to perfection. Definitely a must-try! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                  " Fantastic burger experience! The patty was tender, the toppings were fresh, 
                  and the flavors were perfectly balanced. Will be coming back for more! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                  " Incredible taste! Each bite was packed with flavor and 
                  the burger was cooked just right. Highly recommend! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User4} className="img-fluid" alt="User-4" />
                </div>
                <p>
                  " A burger lover’s dream! The combination of ingredients was spot-on, 
                  and the texture of the burger was perfect. Worth every bite!"
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;