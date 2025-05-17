import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Register from "../allComponents/Register";
import Login from "../allComponents/Login";
import PrivateRouter from "./PrivateRouter";
import MyQueries from "../pages/MyQueries";
import AddQuery from "../pages/AddQuery";
import Queries from "../pages/Queries";
import OtherRecmond from "../pages/OtherRecmond";
import MyRecomd from "../pages/MyRecomd";
import QueryDetails from "../pages/QueryDetails";
import QueryUpdate from "../pages/QueryUpdate";
import RecomandDetails from "../pages/RecomandDetails";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AboutQueries from "../pages/AboutQueries";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            
            {
                index:true,
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
           
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/my-queries',
                element: <PrivateRouter> <MyQueries></MyQueries></PrivateRouter>,
                
            },
            {
                path:'/my-queries/add-query',
                element: <PrivateRouter> <AddQuery></AddQuery></PrivateRouter>
            },
            {
                path:'/my-queries/query-details/:id',
                element:<PrivateRouter><QueryDetails></QueryDetails></PrivateRouter>,
                loader:({params})=> fetch(`${import.meta.env.VITE_localURL}/query/details/${params.id}`)
            },
            {
                path:'/queries/details/:id',
                element: <PrivateRouter><RecomandDetails></RecomandDetails></PrivateRouter>,
                
            },
            {
                path:'/my-queries/query-update/:id',
                element: <PrivateRouter><QueryUpdate></QueryUpdate></PrivateRouter>
            },


            {
                path: '/Recommendations-For-Me',
                element: <PrivateRouter><OtherRecmond></OtherRecmond></PrivateRouter>
            },
           
            {
                path:'/My-recommendations',
                element: <PrivateRouter><MyRecomd></MyRecomd></PrivateRouter>
            },
            {
                path:'/queries',
                element: <Queries></Queries>
            },
            {
                path:'aboutQueries',
                element: <AboutQueries></AboutQueries>
            }
            

        ],
        
        errorElement: <Error></Error>
        
    }

])

export default router