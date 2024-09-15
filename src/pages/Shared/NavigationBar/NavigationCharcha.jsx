import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { LanguageContext } from '../../../providers/LanguageProvider'; // Import LanguageContext

const NavigationCharcha = () => {
    const { user, logOut } = useContext(AuthContext);
    const { translations, fetchTranslations } = useContext(LanguageContext); // Access translations and fetchTranslations
    const [isEnglish, setIsEnglish] = useState(true);

    const handleLanguageToggle = (lang) => {
      fetchTranslations(lang);
      setIsEnglish(lang === 'en');
  };

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error));
    };

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
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Link to='/'>{translations.home}</Link>
              <Link>{translations.about}</Link>
              <Link>{translations.career}</Link>
              <Link>{translations.contact}</Link>
            </Nav>

            {/* Login Button */}
            <Nav className="ms-auto">
              {/* Language switch buttons */}
              <Button onClick={() => handleLanguageToggle(isEnglish ? 'bn' : 'en')}>
                {isEnglish ? 'Bangla' : 'English'}
              </Button>
              
              {user ? 
                <div className='d-flex align-items-center justify-content-center'>
                  <img style={{ width: '40px', borderRadius: '25px' }} src={user.photoURL} alt="" /> 
                  <p className='m-0'>{user.displayName}</p>
                </div> 
                : 
                <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
              }
              {user ? 
                <Button className='btn btn-secondary' onClick={handleLogOut}>Logout</Button> : 
                <Link to="/login"><Button className='btn btn-secondary'>Login</Button></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationCharcha;
