/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import QueryCard from "../allComponents/QueryCard";
import AxiosUses from "../hooks/AxiosUses";
import Loader from "../allComponents/Loader";
import Helmets from "../sharedComponent/Helmets";

const MyQueries = () => {
    
const {user,loading} = useContext(AuthContext)
const [queryData,setQueryData] = useState([])
const axiosSecure = AxiosUses()

useEffect(()=>{
    fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user])
    const fetchData = async()=>{
        // const {data} = await axios.get(`${import.meta.env.VITE_localURL}/my-query?owner_email=${user?.email}`,{withCredentials:true})
        const {data} = await axiosSecure.get(`/my-query?owner_email=${user?.email}`)
        setQueryData(data)
    }
    if(!queryData.length) return <Loader></Loader>

    return (
     <>
     <Helmets heading='MyQueries'></Helmets>
     <div className="w-11/12 mx-auto">
        
        <div className="w-11/12 mx-auto text-center" > <h2 className="text-2xl my-4 font-semibold">My Query List  </h2> 
          <button className="bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white px-4 py-1 rounded-md  "><Link to='/my-queries/add-query'>Add More</Link></button></div>
        {
          queryData?.length? <div  >
          {queryData.map(query=> <QueryCard key={query._id} fetchData = {fetchData} query={query}></QueryCard>)}

        </div>: <div className="text-center"><p  className="text-3xl  my-12 text-[#e44f4f] font-bold">No Data Found In My Query</p>
       </div>

        
        }
      </div>
     </>
    );
};

export default MyQueries;