/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AxiosUses from "../hooks/AxiosUses";
import { FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import Swal from "sweetalert2";
import Loader from "../allComponents/Loader";
import { Zoom } from "react-reveal";
import Helmets from "../sharedComponent/Helmets";


const MyRecomd = () => {
    const {user} =useContext(AuthContext)
    const [recData,setRecData] = useState([])
    const axiosSecure = AxiosUses()
    useEffect(()=>{
        fetchDataRec()
    },[user])

    

    const fetchDataRec = async()=>{
        // const {data} = await axios.get(`${import.meta.env.VITE_localURL}/my-recommendation?recommender_email=${user?.email}`, {withCredentials:true})
        const {data} = await axiosSecure.get(`/my-recommendation?recommender_email=${user?.email}`)

        setRecData(data)

    }
    const handleDelete = (_id) => {

      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to access this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
          if (result.isConfirmed) {
            const {data} =await axios.delete(`${import.meta.env.VITE_localURL}/my-recommendation/${_id}`)
            
             
                 
              if (data.deletedCount) {
                fetchDataRec()
                  
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your Recommandation has been deleted.",
                      icon: "success"
                  });
                  
              }
              
  
          }
      });
  }
    // const handleDelete= async(id)=>{

    //     const {data} =await axios.delete(`${import.meta.env.VITE_localURL}/my-recommendation/${id}`)

    //     if(data.deletedCount){
    //         toast.success('data delete successfully')
    //         fetchDataRec()
    //     }

  
    // }
    if(!recData.length) return <Loader></Loader>
    return (

<>
<Helmets heading='MyRecomdation'></Helmets>
<Zoom>
<div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl flex justify-center font-semibold text-gray-800 mb-6">Recommendations</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead className="bg-gradient-to-r from-[#18171a]  to-[#201e24] text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Product</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Reason</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Time</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Owner Email</th>
              <th className="px-4 py-3 text-center text-sm font-semibold uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {recData.map((data) => (
              <tr
                key={data._id}
                className="hover:bg-gray-50 dark:bg-gray-800 transition-colors border-b border-gray-200"
              >
                <td className="px-4 py-3 text-gray-800 dark:text-gray-100 text-sm">{data.recQueryTitle}</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-100 text-sm">{data.recProductName}</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-100 text-sm">{data.recReason}</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-100 text-sm">{format(new Date(data.currentData), 'PP')}</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-100 text-sm">{data.owner_email}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDelete(data.recommand_id)}
                    className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-110"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</Zoom>
</>


    );
};

export default MyRecomd;