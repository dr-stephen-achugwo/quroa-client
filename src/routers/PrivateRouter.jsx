/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../allComponents/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <Loader></Loader>
    }
    if(user) return children
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;