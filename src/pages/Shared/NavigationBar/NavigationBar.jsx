import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import '../NavigationBar/NavigationBar.css'


const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handlLogOut = () => {
        logOut()
        .then()
        .catch(
            error => console.log(error)
        )
    }
    return (
        <div>
            <Container>
            <Navbar collapseOnSelect expand="lg" className="mb-4">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav d-flex align-items-center">
                        <Nav className="mx-auto">
                            <Link to="/category/0">Home</Link> 
                            <Link to="/about">About</Link>
                            <Link to="/Career">Career</Link>
                        </Nav>
                        <Nav className='align-items-center justify-content-center gap-2'>
                            {
                                user && 
                                <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
                            }
                            {user ? 
                            <Button  className='btn btn-secondary' onClick={handlLogOut}>Logout</Button> : 
                            <Link to="/login"><Button className='btn btn-secondary'>Login</Button></Link>
                            }
                          
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </Container>
            
        </div>
    );
};


export default NavigationBar;
