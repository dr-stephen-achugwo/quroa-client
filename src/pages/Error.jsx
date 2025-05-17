
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import error from '../../src/animation2/Error 429-amico.svg'

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[80vh]'>
           <div className=' md:w-4/12 my-3 mx-auto'><img className='w-full' src={error} alt="" /></div>
           <div > <Link to='/'> <button className='text-white flex items-center gap-2 justify-center py-2 px-4 rounded-sm  bg-[#EF4444]'  > <FaArrowLeft size={15} /><span>Back to Home</span> </button></Link></div>
        </div>
    );
};

export default Error;