import React from 'react';
import NavigationCharcha from '../../pages/Shared/NavigationBar/NavigationCharcha';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';



const CharchaMain = () => {
    return (
        <div>
            <NavigationCharcha></NavigationCharcha>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};





export default CharchaMain;
