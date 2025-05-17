import { format } from "date-fns";
import { Zoom } from "react-reveal";
import { Link, useLoaderData } from "react-router-dom";
import Helmets from "../sharedComponent/Helmets";


const QueryDetails = () => {
 const detailsData =useLoaderData()
 const {owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,owner_photo,owner_disPlayName} = detailsData
  
    return (
      
      <>
      <Helmets heading='details'></Helmets>
      <Zoom>
          <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-gray-800">{productName}</h1>
            <span className="bg-red-100 text-red-600 px-4 py-1 text-sm rounded-full shadow-sm">
              {productBrand}
            </span>
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            Last Updated: <span className="font-semibold"> {format(new Date(currentData), 'PP')}</span>
          </p>
        </div>
  
        {/* Main Content */}
        <div className="p-8 md:flex md:gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 relative">
            <img
              src={productImageURL}
              alt={productName}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>
  
          {/* Product Details */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {queryTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Boycott Reason:</strong> {boycottReason}
              </p>
              <p className="text-gray-800  font-medium mb-4">
                <strong>Recommendations:</strong> {recommendationCount}+
              </p>
            </div>
            <Link to='/my-queries'><button className="px-6 py-3 bg-[#EF4444] text-white font-semibold rounded-lg shadow-md hover:bg-[#EF4444]transition-transform transform hover:scale-105 duration-300">
              Back To My Queries
            </button></Link>
           
          </div>
        </div>
  
        {/* Divider */}
        <div className="my-6 mx-8 border-t border-gray-300"></div>
  
        {/* Owner Details */}
        <div className="p-8 flex items-center gap-6">
          <img
            src={owner_photo}
            alt={owner_disPlayName}
            className="w-20 h-20 rounded-full object-cover shadow-md border-4 border-red-400"
          />
          <div>
            <p className="text-lg font-bold text-gray-800">{owner_disPlayName}</p>
            <p className="text-sm text-gray-500">{owner_email}</p>
          </div>
        </div>
      </div>
        </Zoom>
      </>
    );
};

export default QueryDetails;