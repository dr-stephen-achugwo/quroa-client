import Lottie from "lottie-react";
import question from '../animation/questions.json'
import { Link } from "react-router-dom";


const Section_1 = () => {
    return (
        <div>

            <div className="grid md:grid-cols-2 w-11/12  md:w-9/12 mx-auto my-16">
                <div className="bg-red-500 ">
                    <Lottie animationData={question}></Lottie>
                </div>
                <div className="bg-gray-900 pl-8 pr-4 py-16 text-white">

                    <h2 className="text-2xl font-bold py-3 text-[#EF4444]">Ask A Question</h2>
                    <h1 className="text-3xl md:text-5xl  leading-normal font-semibold py-2">Get Help From Professionals</h1>
                    <p className=" dark:text-gray-100    text-gray-400 py-2">Need expert guidance? Connect with industry professionals who can provide reliable advice, answer your questions, and help you solve problems efficiently. Whether it  career advice, technical support, or personal growth, get the insights you need from experienced professionals in various fields. Start learning and growing today!</p>
                    <Link to='/my-queries'><button className='bg-[#EF4444] rounded-sm font-semibold my-4 px-4 py-2' >Add Your Query</button></Link>
                    

                </div>

            </div>
        </div>
    );
};

export default Section_1;