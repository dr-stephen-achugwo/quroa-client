import { Link } from "react-router-dom";

const Section_3 = () => {
    return (
        <div  className="py-8">
            <div className='text-center w-11/12 mx-auto'>
                <h2 className='text-2xl md:text-3xl py-3 font-bold'>Join Quora BD Prime Community</h2>
                <p className='md:w-6/12 text-gray-500 dark:text-gray-100 py-2 mx-auto'>Be a part of an exclusive space where curious minds from Bangladesh connect, share knowledge, and grow together. Engage in insightful discussions, ask questions, and explore new perspectives! </p>
            </div>
            <div className="w-11/12 py-6 text-center mx-auto">
                <input type="email" className="py-3 px-8 rounded-l-sm outline-none border-2 " placeholder="Enter Your Email Here" />
               <Link to='/register'> <input type="button" className="py-3 font-semibold cursor-pointer border-2 border-[#EF4444]  bg-[#EF4444] rounded-r-sm px-6 text-white" value="subscribe" /></Link>
            </div>
            
        </div>
    );
};

export default Section_3;