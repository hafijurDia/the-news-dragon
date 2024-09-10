import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <Spinner animation="grow" />;
    }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,  // Validation for the children prop
};

export default PrivateRoute;

