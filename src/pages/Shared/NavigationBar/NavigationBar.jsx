import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const NavigationBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Container>
            <Navbar collapseOnSelect expand="lg" className="">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><Link to="/category/0">Home</Link> </Nav.Link>
                            <Nav.Link >About</Nav.Link>
                            <Nav.Link >Career</Nav.Link>
                            
                        </Nav>
                        <Nav className='align-items-center justify-content-center'>
                            {
                                user && 
                                
                                <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
                         
                            }
                            
                            {user ? 
                            <Button variant="secondary">Logout</Button> : 
                            <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }
                          
                        </Nav>
                    </Navbar.Collapse>
  
            </Navbar>
            </Container>
            
        </div>
    );
};



export default NavigationBar;
