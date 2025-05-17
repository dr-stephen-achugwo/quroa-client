import axios from "axios";
import {  useEffect, useState } from "react";
import Card from "../allComponents/Card";


import Loader from "../allComponents/Loader";
import Helmets from "../sharedComponent/Helmets";
import { IoIosSearch } from "react-icons/io";



const Queries = () => {
   
    const [search,setSearch] =useState('')
    
    
 const[data,allData] = useState([])
    useEffect(()=>{
        const fetchAllQuery = async()=>{

            const {data} = await axios.get(`${import.meta.env.VITE_localURL}/all-query?search=${search}`)
            allData(data)
        }
        fetchAllQuery()
        
    },[search])
    const [layout ,setLayout] = useState('lg:grid-cols-3')
    const changeLayout = (layout)=>{
        setLayout(layout)

    }
   if(!data.length) return <Loader></Loader>

    return (

     <>
     <Helmets heading='Queries'></Helmets>
        <div  className="pb-8">
            <div className="flex items-center   justify-between w-11/12 mx-auto pt-4 ">
             <div className="flex items-center border-black rounded-md  px-4 py-2 bg-white gap-2 border-[1px]"> <span className="dark: text-gray-800"> <IoIosSearch /></span> <input onChange={e=> setSearch(e.target.value)}
                type="text"
                 placeholder="serach by Product name " 
                 className="outline-none " /></div>
                 <div className="lg:flex items-center  hidden  justify-center ">
                <button onClick={()=>changeLayout('lg:grid-cols-1')} className={`${layout == 'lg:grid-cols-1' ? 'bg-[#EF4444] text-gray-100 ':'bg-gray-800 dark:bg-white dark:text-gray-800  '} rounded-l-sm py-1  px-6 text-white dark:border-gray-800  border-r-[1px]`}>  <img className='h-6' src="https://img.icons8.com/?size=40&id=33419&format=png&color=FFFFFF" alt="" />  </button>
                <button onClick={()=>changeLayout('lg:grid-cols-2')} className={`${layout == 'lg:grid-cols-2' ? 'bg-[#EF4444] text-gray-100 ':'bg-gray-800 dark:bg-white dark:text-gray-800  '}  py-1  px-6 dark:border-gray-800 border-r-[1px] text-white`}> <img className="h-6 " src="https://img.icons8.com/?size=40&id=2692&format=png&color=FFFFFF" alt="" /> </button>
                <button onClick={()=>changeLayout('lg:grid-cols-3')} className={ `${layout == 'lg:grid-cols-3' ? 'bg-[#EF4444] text-gray-100 ':'bg-gray-800 dark:bg-white dark:text-gray-800  '} rounded-r-sm py-1  px-6 text-white`}> <img className="h-6" src="https://img.icons8.com/?size=40&id=nQKfpKk1APTl&format=png&color=FFFFFF" alt="" /> </button>
                
            </div> 
            </div>
            
           
              <div  className= {`grid ${layout} w-11/12  py-2  mx-auto gap-4 ${layout=='lg:grid-cols-1' && 'lg:w-5/12'} md:grid-cols-2 `}>
              
            {data.map(post=> <Card key={post._id} post={post}></Card>)}
 
          </div>
            
        </div>
     </>
    );
};

export default Queries;