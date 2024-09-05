import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);

export const AuthProvider = ({children}) => {

    const user = null;
    const authInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};




AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is a React node and is required
};
