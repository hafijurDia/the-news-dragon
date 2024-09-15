import React, { useContext } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Row } from "react-bootstrap";
import '../Slider/Slider.css'
import { LanguageContext } from "../../../providers/LanguageProvider";

const Slider = () => {
  const { translations } = useContext(LanguageContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one slide at a time on all devices
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="image-slider w-100">
      <SlickSlider {...settings}>
        {/* Slide 1 */}
        <div className="position-relative">
          <img
            src="https://img.freepik.com/free-photo/portrait-happy-asian-girl-pointing-fingers-looking-left-smiling-amazed-checking-out-promo-ban_1258-92572.jpg?w=826"
            alt="Slide 1"
            className="w-100"
          />
          <div
            className="position-absolute text-light"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Row>
              <Col className="text-center">
                <h1>{translations.welcome}</h1>
                <p>{translations.description}</p>
                <Button variant="primary" size="lg">
                  Get Involved
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="position-relative">
          <img
            src="https://img.freepik.com/free-photo/online-shopping-cheerful-asian-girl-holding-credit-card-smartphone-paying-order-with-mobile-phone-standing-yellow-background_1258-93224.jpg?w=826"
            alt="Slide 2"
            className="w-100"
          />
          <div
            className="position-absolute text-light"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Row>
              <Col className="text-center">
              <h1>{translations.welcome}</h1>
              <p>{translations.description}</p>
                <Button variant="primary" size="lg">
                  Donate Now
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="position-relative">
          <img
            src="https://img.freepik.com/premium-photo/joyful-asian-woman-celebrating-holding-mobile-phone-winning-achieve-goal-smartphone-standing-yellow-background_1258-92227.jpg?w=826"
            alt="Slide 3"
            className="w-100"
          />
          <div
            className="position-absolute text-light"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Row>
              <Col className="text-center">
              <h1>{translations.welcome}</h1>
              <p>{translations.description}</p>
                <Button variant="primary" size="lg">
                  Become a Volunteer
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </SlickSlider>
    </section>
  );
};

export default Slider;
