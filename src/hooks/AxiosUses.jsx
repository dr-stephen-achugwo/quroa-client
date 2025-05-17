/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_localURL,
    withCredentials:true
})

const AxiosUses = () => {
    const{logOut} = useContext(AuthContext)
    const navigate = useNavigate()
   
    axiosSecure.interceptors.response.use(
        res=>{
            return res
        },
        async error =>{
            if(error.response.status === 401 || error.response.status === 403){
                await logOut()
                navigate('/login')
            }
            return  Promise.reject(error)
        }
    )
    return axiosSecure
};

export default AxiosUses;