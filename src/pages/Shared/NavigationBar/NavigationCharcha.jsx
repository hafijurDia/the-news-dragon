import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const NavigationCharcha = () => {
    const {user, logOut} = useContext(AuthContext);

    const handlLogOut = () => {
        logOut()
        .then()
        .catch(
            error => console.log(error)
        )
    }

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Logo Section */}
          <Navbar.Brand>
            <Link to='/' className='text-decoration-none fs-3 font-bold fw-bold'>Charcha</Link>
            
          </Navbar.Brand>

          {/* Toggle for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Menu Items */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="mx-auto">
              <Link to='/'>Home</Link>
              <Link>Features</Link>
              <Link>Pricing</Link>
              <Link>Contact</Link>
            </Nav>

            {/* Login Button */}
            <Nav className="ms-auto">
            {
                                user ? <div className='d-flex align-items-center justify-content-center'><img style={{ width: '40px', borderRadius: '25px' }} src={user.photoURL} alt="" /> <p className='m-0'>{user.displayName}</p></div> :
                                <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
                            }
                            {user ? 
                            <Button  className='btn btn-secondary' onClick={handlLogOut}>Logout</Button> : 
                            <Link to="/login"><Button className='btn btn-secondary'>Login</Button></Link>
                            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationCharcha;
