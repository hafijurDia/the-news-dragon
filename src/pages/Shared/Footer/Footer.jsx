import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    
      <footer className="bg-dark text-light py-5">
        <Container>
          <Row>
            {/* About Us Column */}
            <Col md={3}>
              <h5>About Us</h5>
              <p>
                We are a non-profit organization committed to improving the lives of those in need by providing education, resources, and opportunities.
              </p>
            </Col>
  
            {/* Quick Links Column */}
            <Col md={3}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-light">Home</a></li>
                <li><a href="#about" className="text-light">About Us</a></li>
                <li><a href="#projects" className="text-light">Our Projects</a></li>
                <li><a href="#contact" className="text-light">Contact Us</a></li>
              </ul>
            </Col>
  
            {/* Get Involved Column */}
            <Col md={3}>
              <h5>Get Involved</h5>
              <ul className="list-unstyled">
                <li><a href="#volunteer" className="text-light">Volunteer</a></li>
                <li><a href="#donate" className="text-light">Donate</a></li>
                <li><a href="#partnerships" className="text-light">Partnerships</a></li>
              </ul>
            </Col>
  
            {/* Follow Us Column */}
            <Col md={3}>
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="#facebook" className="text-light">Facebook</a></li>
                <li><a href="#twitter" className="text-light">Twitter</a></li>
                <li><a href="#instagram" className="text-light">Instagram</a></li>
                <li><a href="#linkedin" className="text-light">LinkedIn</a></li>
              </ul>
            </Col>
          </Row>
  
          {/* Copyright Section */}
          <Row className="mt-4">
            <Col className="text-center">
              <p>&copy; 2024 NGO Organization. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}
