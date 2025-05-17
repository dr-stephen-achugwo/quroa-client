/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AddQuery = () => {
  const [time, setTime] = useState(new Date());
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImageURL = form.productImageURL.value;
    const queryTitle = form.queryTitle.value;
    const boycottReason = form.boycottReason.value;

    // Owner data
    const owner_email = user?.email;
    const owner_disPlayName = user?.displayName;
    const owner_photo = user?.photoURL;
    const recommendationCount = 0;
    const currentData = time;

    const postInfo = {
      owner_email,
      productName,
      productBrand,
      productImageURL,
      queryTitle,
      boycottReason,
      recommendationCount,
      currentData,
      owner_photo,
      owner_disPlayName,
    };

    axios
      .post(`${import.meta.env.VITE_localURL}/add-query`, postInfo)
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Data added successfully");
          return navigate("/my-queries");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      {/* Stylish Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-12 px-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Query Platform</h1>
        <p className="text-lg mb-6">
          Effortlessly manage and track your product queries in one place.
        </p>
        <button
          onClick={() => navigate("/my-queries")}
          className="bg-[#EF4444] hover:bg-[#ff5a5a] text-white font-medium py-3 px-6 rounded-full shadow-md transition duration-300"
        >
          My Queries
        </button>
      </div>

    
      <form
        onSubmit={addData}
        className="w-11/12 lg:w-9/12 mx-auto bg-white shadow-lg p-6 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#e44f4f]">
          Add Query
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
          
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Product Name:
              </label>
              <input
                type="text"
                name="productName"
                required
                placeholder="Enter Product Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

           
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Product Brand:
              </label>
              <input
                type="text"
                name="productBrand"
                required
                placeholder="Enter Product Brand"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Product Image URL:
              </label>
              <input
                type="url"
                name="productImageURL"
                required
                placeholder="Enter Product Image URL"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

           
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Query Title:
              </label>
              <input
                type="text"
                name="queryTitle"
                required
                placeholder="Enter Query Title"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

     
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Boycotting Reason Details:
          </label>
          <textarea
            name="boycottReason"
            required
            placeholder="Enter Boycotting Reason"
            className="w-full p-3 border border-gray-300 dark:text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-28"
          ></textarea>
        </div>

        {/* Submit Button */}
       <button
          type="submit"
          className="w-full bg-[#e44f4f] text-white py-3 rounded-lg transition duration-300"
        >
          Add Query
        </button>
      </form>
    </div>
  );
};

export default AddQuery;
