import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Slider from '../../Shared/Slider/Slider'



export default function Home() {
 
  return (
    <>

<Slider></Slider>

  <section className="about-section py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              We are a non-profit organization dedicated to improving lives by providing essential resources, education, and support to communities in need.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="impact-section bg-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h3>500+</h3>
            <p>Children Educated</p>
          </Col>
          <Col md={4}>
            <h3>200+ Tons</h3>
            <p>Food Distributed</p>
          </Col>
          <Col md={4}>
            <h3>1000+</h3>
            <p>Volunteers Engaged</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="projects-section py-5">
      <Container>
        <Row>
          <Col>
            <h2>Our Projects</h2>
            <p>
              Discover the impactful projects we are working on to bring positive change to the world.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="project-card bg-light p-3">
              <h4>Project 1</h4>
              <p>Building schools in underdeveloped regions.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="project-card bg-light p-3">
              <h4>Project 2</h4>
              <p>Providing clean water in rural areas.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="project-card bg-light p-3">
              <h4>Project 3</h4>
              <p>Empowering women through skill development.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="contact-section bg-light py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>If you would like to get in touch or support our mission, feel free to contact us.</p>
            <p>Email: contact@ngo.org</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Contact Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  </>
    
  )
}
