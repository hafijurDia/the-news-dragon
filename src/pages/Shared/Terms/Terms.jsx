import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Terms = () => {
    return (
        <Container>
            <h2>Our terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi nihil impedit unde minus iure ipsa ipsum dolorem doloribus deserunt qui temporibus minima a necessitatibus nam velit similique, culpa aut?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
            
        </Container>
    );
};


Terms.propTypes = {

};


export default Terms;
