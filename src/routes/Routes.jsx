import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import SingleNewsLayout from "../layouts/SingleNewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
import About from "../pages/About/About";
import SecondaryLayout from "../layouts/SecondaryLayout";
import Career from "../pages/Career/Career";
import ForgetPassword from "../pages/Login/ForgetPassword/ForgetPassword";
import CharchaMain from "../layouts/charcha/CharchaMain";
import Home from "../pages/Home/Home/Home";
import Slider from "../pages/Shared/Slider/Slider";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CharchaMain></CharchaMain>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/slider',
                element: <Slider></Slider>
            },
            
            
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }, 
            {
                path: 'forget-password',
                element: <ForgetPassword></ForgetPassword>
            }, 
            {
                path: 'terms', 
                element: <Terms></Terms>
            },
            
        ]
    },
    {
        path: '/',
        element: <SecondaryLayout></SecondaryLayout>,
        children: [
            {
                path: 'about', 
                element: <About></About>
            },
            {
                path: 'career', 
                element: <Career></Career>
            },
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-new.vercel.app/categories/${params.id}`)
            }
        ]
    }, 
    {
        path: 'news', 
        element: <SingleNewsLayout></SingleNewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-new.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;