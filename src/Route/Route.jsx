
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Layout from "../Layout/Layout";
import ChatBox from "../pages/ChatBox/ChatBox";
const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Home></Home>
            },
           
        ]
    },
    {
        path:'/login',
        element:<Layout></Layout>,
        children:[
            {
                path:'/login/login',
                element:<Login></Login>
            },
            {
                path:'/login/register',
                element:<Register></Register>
            },
            {
                path:'/login/chat',
                element:<ChatBox></ChatBox>
            },
        ]
    }
]);

export default router;