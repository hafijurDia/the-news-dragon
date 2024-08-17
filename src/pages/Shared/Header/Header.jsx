import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

export default function Header() {
    return (
        <Container className='py-5'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary"><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-light px-3 py-3'>
                <Button variant="danger" className='mr-5 rounded-0'>Latest</Button>
                <Marquee speed={50} pauseOnHover={true} style={{ fontWeight: 'bold' }}>
                    I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" className="">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                            
                        </Nav>
                        <Nav className='align-items-center justify-content-center'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
  
            </Navbar>
        </Container>
    )
}
