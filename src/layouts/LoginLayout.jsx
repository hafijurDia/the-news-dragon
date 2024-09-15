import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import NavigationCharcha from '../pages/Shared/NavigationBar/NavigationCharcha';



const LoginLayout = () => {
    return (
        <div>
            <NavigationCharcha></NavigationCharcha>
            <Outlet></Outlet>
        </div>
    );
};



export default LoginLayout;
