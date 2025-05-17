/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import Loader from '../allComponents/Loader';
import { Zoom } from 'react-reveal';
import Helmets from '../sharedComponent/Helmets';

const RecomandDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [query, setQuery] = useState([]);
    const [time, setTime] = useState(new Date());
    const { owner_email, productName, productBrand, productImageURL, queryTitle, boycottReason, owner_photo, owner_disPlayName } = query || {};

    useEffect(() => {
        fetchDataById();
    }, [query]);

    const fetchDataById = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_localURL}/query/details/${id}`);
        setQuery(data);
    };

    const handle = (e) => {
        e.preventDefault();
        const form = e.target;
        const recProductName = form.productName.value;
        const recProductBrand = form.productBrand.value;
        const recProductImageURL = form.productImageURL.value;
        const recQueryTitle = form.queryTitle.value;
        const recReason = form.boycottReason.value;
        const recommand_id = id;

        // Owner data
        const recommender_email = user?.email;
        const recommender_disPlayName = user?.displayName;
        const recommender_photo = user?.photoURL;
        const currentData = time;

        const recommenderInfo = { recProductName, recProductBrand, recProductImageURL, recQueryTitle, recReason, recommender_email, recommender_disPlayName, recommender_photo, currentData, recommand_id, owner_email };

        if (owner_email === recommender_email) {
            navigate('/queries');
            return toast.error('You can\'t recommend your own query!');
        }

        axios.post(`${import.meta.env.VITE_localURL}/recommanded`, recommenderInfo)
            .then(data => {
                if (data.data.acknowledged) {
                    navigate('/queries');
                    toast.success('Recommendation submitted successfully');
                } else {
                    toast.error('You have already recommended this query');
                    navigate('/queries');
                }
            })
            .catch(() => {
                toast.error('Server error, please try again');
            });
    };
if(query.length) return <Loader></Loader>
    return (
       <>
       <Helmets heading='RecomandDetails'></Helmets>
       <Zoom>
            <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto bg-white   dark:bg-gray-800 shadow-xl rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center text-[#EF4444] mb-8">Recommend This Query</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Section - Owner Info */}
                    <div className="space-y-6">
                        <div className=''>
                            <div className="flex items-center space-x-4">
                               {owner_photo?                                 <img src={owner_photo} alt="Owner" className="w-10 h-10 rounded-full object-cover" />:
                               <div className="avatar placeholder">
                               <div className="bg-neutral text-neutral-content w-10 h-10 rounded-full">
                                   <span className="text-md">A</span>
                               </div>
                           </div>
}
                                <div>
                                    <p className="font-medium dark:text-white  text-gray-800">Name: <span className="text-[#EF4444]">{owner_disPlayName?owner_disPlayName:`Guest`}</span></p>
                                    <p className="text-sm dark:text-gray-100  text-gray-500">Email: {owner_email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F9FAFB] dark:text-gray-800  p-4 rounded-md">
                            <h4 className="text-lg font-medium  text-gray-700">Product Details</h4>
                            <div className="space-y-2">
                                <p><span className="font-semibold">Product Name:</span> {productName}</p>
                                <p><span className="font-semibold">Product Brand:</span> {productBrand}</p>
                                <p><span className="font-semibold">Product Image:</span> <img src={productImageURL} alt={productName} className="w-full object-cover rounded-lg" /></p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-md">
                        <form onSubmit={handle} className="space-y-6 dark:text-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-800">Recommendation Form</h3>

                            <div className="grid lg:grid-cols-2 gap-6">
                                {/* Product Name */}
                                <div>
                                    <label className="block pb-2 font-semibold text-gray-700">Recommended Product Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        required
                                        placeholder="Enter Product Name"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Product Brand */}
                                <div>
                                    <label className="block pb-2 font-semibold text-gray-700">Recommended Product Brand</label>
                                    <input
                                        type="text"
                                        name="productBrand"
                                        required
                                        placeholder="Enter Product Brand"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Product Image URL */}
                            <div>
                                <label className="block pb-2 font-semibold text-gray-700">Product Image URL</label>
                                <input
                                    type="text"
                                    name="productImageURL"
                                    required
                                    placeholder="Enter Product Image URL"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Query Title */}
                            <div>
                                <label className="block pb-2 font-semibold text-gray-700">Query Title</label>
                                <input
                                    type="text"
                                    name="queryTitle"
                                    required
                                    placeholder="Enter Query Title"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Boycotting Reason */}
                            <div>
                                <label className="block pb-2 font-semibold text-gray-700">Boycotting Reason</label>
                                <textarea
                                    name="boycottReason"
                                    required
                                    placeholder="Enter Boycotting Reason"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#EF4444] text-white py-3 rounded-lg hover:bg-[#D93B3B] transition duration-300"
                            >
                                Submit Recommendation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
       </>
    );
};

export default RecomandDetails;
