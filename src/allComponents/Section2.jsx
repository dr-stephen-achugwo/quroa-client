

import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <div>
            {/* heading  */}
            <div className='text-center w-11/12 mx-auto'>
                <h2 className= 'text-2xl md:text-3xl py-3 font-bold'>Query & Ask Anything  What You Want</h2>
                <p className='md:w-6/12 dark:text-gray-100 text-gray-500 py-2 mx-auto'>Disilab is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-16 gap-3 mt-6 w-11/12  md:w-9/12 mx-auto">
                {/* card 1  */}
               <Zoom  triggerOnce={false}>
               <div className='text-center flex flex-col h-full   px-6 shadow-lg rounded-sm border-2 mt-8'>
                    <div className='flex-grow'>
                    <img className='mx-auto' src="https://img.icons8.com/?size=100&id=txNnXCx7ya2j&format=png&color=000000" alt="" />
                    <h2 className='text-xl font-bold py-4'>Public Q & A</h2>
                    <p className='text-lg leading-8'>This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                    </div>
                    <Link to='/my-queries'><button className='bg-[#EF4444] text-white mb-4   rounded-sm font-semibold px-4 py-2' >My Query</button></Link>
                </div>

               </Zoom>
                {/* card 2  */}
                <Zoom triggerOnce={false}>
                <div className='text-center flex flex-col h-full px-6 border-2 rounded-sm  shadow-lg mt-8'>
                    <div className='flex-grow'>
                    <img className='mx-auto' src="https://img.icons8.com/?size=100&id=gv3yLpC5QbG4&format=png&color=000000" alt="" />
                    <h2 className='text-xl font-bold py-4'>Search Your Answers</h2>
                    <p className='text-lg leading-8'>This is a simple yet powerful phrase designed to inspire curiosity and exploration. </p>
                    </div>
                    <Link to='/queries'><button className='dark:bg-white dark:text-gray-800 bg-gray-900 text-white rounded-sm font-semibold mb-4 px-4 py-2' > Searh Query</button></Link>            
                    </div>
                </Zoom>
                {/* card 3  */}
                <Zoom triggerOnce={false}>
                <div className='text-center flex flex-col h-full px-6 rounded-sm border-2  shadow-lg mt-8'>
                   <div className='flex-grow'>
                   <img className='mx-auto' src="https://img.icons8.com/?size=100&id=fEzwsq1QGmXg&format=png&color=000000" alt="" />
                    <h2 className='text-xl font-bold py-4'>What Is Your Tell </h2>
                    <p className='text-lg leading-8'>A tell refers to a subtle hint or sign that reveals something about a person emotions, intentions, or thoughts, often . </p>
                   </div>
                    <Link to='/My-recommendations'><button className='bg-[#EF4444] text-white rounded-sm font-semibold mb-4 px-4 py-2' >My Anwers</button></Link>
                </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Section2;