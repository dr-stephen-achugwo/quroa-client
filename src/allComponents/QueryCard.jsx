/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { LiaEyeSolid } from "react-icons/lia";
import { MdWatchLater } from "react-icons/md";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const QueryCard = ({ query, fetchData }) => {
    const { _id, owner_email, productName, productBrand, productImageURL, queryTitle, boycottReason, recommendationCount, currentData, owner_photo, owner_disPlayName } = query;



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
                const { data } = await axios.delete(`${import.meta.env.VITE_localURL}/query-delete/${_id}`)
              
               
                   
                if (data.deletedCount) {
                    fetchData()
                    
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your query has been deleted.",
                        icon: "success"
                    });
                    
                }
                
    
            }
        });
    }
   
    return (
        <div>

           <Zoom>
           <div className="md:grid md:grid-cols-8 gap-4 my-4  items-center  border-b-[1px] py-4 ">
                <div className="col-span-2   px-4 ">
                    <img referrerPolicy="no-referrer" className="mx-auto  md:w-[300px]  rounded-md " src={productImageURL} alt="#" />
                </div>
                <div className="col-span-6 px-4 ">
                    <div>
                        <h2 className="text-xl font-semibold pb-1">{queryTitle}</h2>

                        <p className="pb-2 font-semibold dark:text-gray-100 text-gray-600"> {productName}</p>

                        <div className=" md:flex gap-8 pb-4 dark:text-gray-100 text-gray-600">
                            <div className="flex gap-2 items-center"> <MdWatchLater /><p> {format(new Date(currentData), 'P')}</p></div>
                            <div className="flex gap-2 items-center">  <LiaEyeSolid />  <p>{recommendationCount} recommended</p></div>
                        </div>
                        <p className="pr-4 dark:text-gray-100 text-gray-600 text-sm ">{boycottReason}</p>
                    </div>
                   
                   <div className="flex mt-2 gap-2">
                   <button className=' bg-yellow-500 text-white px-4 py-1 rounded-t-md rounded-b-md'><Link to={`/my-queries/query-details/${_id}`}>Details</Link></button>
                    <button className=' dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white px-4 py-1 rounded-t-md rounded-b-md'><Link to={`/my-queries/query-update/${_id}`} >Update</Link></button>

                    <button onClick={() => handleDelete(_id)} className=' bg-red-500 text-white px-4 py-1 rounded-t-md rounded-b-md'>Delete</button>
                   </div>
                </div>
            </div>
           </Zoom>


        </div>

    );
};

export default QueryCard;