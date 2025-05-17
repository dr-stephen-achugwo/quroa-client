/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AxiosUses from "../hooks/AxiosUses";
import { format } from "date-fns";
import Loader from "../allComponents/Loader";
import { Zoom } from "react-reveal";
import Helmets from "../sharedComponent/Helmets";


const OtherRecmond = () => {
    const {user} =useContext(AuthContext)
    const [recData,setRecData] = useState([])
    const axiosSecure = AxiosUses()
    useEffect(()=>{
        fetchDataRec()
    },[user])

    const fetchDataRec = async()=>{
      
        // const {data} = await axios.get(`${import.meta.env.VITE_localURL}/recommendation-for-me?owner_email=${user?.email}`,{withCredentials:true})
         const {data} =await axiosSecure.get(`/recommendation-for-me?owner_email=${user?.email}`)
        setRecData(data)

    }
    if(!recData.length) return <Loader></Loader>
    return (

<>
<Helmets heading='otherRecmondations'></Helmets>
<Zoom>
<div className="p-8 dark:bg-gray-800  bg-gray-50   min-h-screen flex  justify-center">
<div className="w-full max-w-6xl  bg-white shadow-xl rounded-lg overflow-hidden">
  <div className="bg-gray-800 dark:text-gray-800 dark:bg-gray-50 text-white text-lg font-semibold p-5 text-center">
    Recommendations Overview
  </div>
  <div className="overflow-x-auto">
    <table className="table-auto w-full text-sm text-left text-gray-700">
      <thead className="bg-gradient-to-r from-gray-600 to-gray-900 text-white">
        <tr>
          <th className="px-6 py-4 whitespace-nowrap">Recommendation Title</th>
          <th className="px-6 py-4 whitespace-nowrap">Product Name</th>
          <th className="px-6 py-4 whitespace-nowrap">Reason</th>
          <th className="px-6 py-4 whitespace-nowrap">Time</th>
          <th className="px-6 py-4 whitespace-nowrap">Owner Email</th>
        </tr>
      </thead>
      <tbody>
        {recData.map((data, index) => (
          <tr
            key={data._id}
            className={`${
              index % 2 === 0 ? "bg-gray-50 dark:bg-gray-600 dark:text-white" : "bg-white dark:bg-gray-700 dark:text-white"
            } hover:bg-indigo-100 transition-colors`}
          >
            <td className="px-6 py-4">{data.recQueryTitle}</td>
            <td className="px-6 py-4">{data.recProductName}</td>
            <td className="px-6 py-4">{data.recReason}</td>
            <td className="px-6 py-4">{format(new Date(data.currentData),'Pp')}</td>
            <td className="px-6 py-4">{data.recommender_email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>
</Zoom>
</>
    );
};

export default OtherRecmond;