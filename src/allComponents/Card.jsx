/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Comment from './Comment';
import { MdWatchLater } from 'react-icons/md';
import { LiaEyeSolid } from 'react-icons/lia';
import { Fade, Zoom } from 'react-reveal';


const Card = ({ post }) => {
    const { _id, owner_email, productName, productBrand, productImageURL, queryTitle, boycottReason, recommendationCount, currentData, owner_photo, owner_disPlayName } = post;

    const [comment, setComment] = useState([])
    const [showAllComments, setShowAllComments] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])


    const [isExpanded, setIsExpanded] = useState(false);

    const handleSeeMore = () => {
        setIsExpanded(true);
    };
    const fetchData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_localURL}/recommend-id?recommand_id=${_id}`)
        setComment(data)
    }

    return (
        <Zoom>
            <div className="  dark:bg-gray-800 bg-white w-full flex flex-col h-full px-4 my-4 items-start shadow-md border-gray-200 border-[1px] pb-2 rounded-sm">


<div className=" flex-grow  w-full">
    <div>
        <div className='flex gap-2 items-start my-4 '>
            {post?.owner_photo ? <img src={owner_photo} className='w-10 h-10 rounded-full' alt="" /> :
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                        <span className="text-xs">A</span>
                    </div>
                </div>}
            <div>
                <p className='font-semibold '>{owner_disPlayName ? owner_disPlayName : 'Guest '}</p>
                <p className='text-xs dark:text-gray-100 text-gray-400'>{format(new Date(currentData), 'PP')}</p>
            </div>

        </div>
        <h2 className="text-2xl font-semibold pb-1">{queryTitle}</h2>

        <p className="pb-1 text-xl font-semibold dark:text-gray-100 text-gray-600"> {productName}</p>


        {/* <p className="w-11/12 text-gray-600 text-md border-b-[1px] py-3 ">{boycottReason}</p> */}
        <div>
            {isExpanded ? (
                <p className='py-4'>{boycottReason}

                </p>

            ) : (
                <p className='py-4'>
                    {boycottReason.split(' ').slice(0, 10).join(' ')}...
                    <button onClick={handleSeeMore} className='ml-2 font-semibold'>
                        See More
                    </button>
                </p>
            )}
        </div>
        <div className=" h-[250px]   w-full">
            
            {productImageURL?<img referrerPolicy="no-referrer" className="   mx-auto w-auto object-cover h-full rounded-md " src={productImageURL} alt='' />: <img className=' mx-auto w-auto object-cover h-full rounded-md' src="https://img.freepik.com/free-vector/speech-bubble-question-mark-hand-drawn_78370-6191.jpg" alt="" /> }

        </div>
        <div className=" flex gap-8 py-2 border-b-[1px] text-sm dark:text-gray-100 text-gray-600">
            <div className="flex gap-2 items-center"> <MdWatchLater /><p> {format(new Date(currentData), 'P')}</p></div>
            <div className="flex gap-2 items-center">  <LiaEyeSolid />  <p>{recommendationCount} recommended</p></div>
        </div>

        <div>
            {comment?.length > 0 && (
                <>
                    {/* <span className='font-semibold py-1 my-1 border-b-[1px]'>Recommended Product:</span> */}
                    {showAllComments ? (
                        comment.map((comment) => (
                            <div key={comment._id} className='flex items-center gap-2 my-4'>
                                <img className='w-10 rounded-full h-10' src={comment.recommender_photo} alt="" />
                                <div className='py-[2px] px-2  dark:bg-gray-800 bg-gray-200 border-[1px] rounded-md w-[300px]'>
                                    <p className='font-bold text-sm'>{comment.recommender_disPlayName ?comment.recommender_disPlayName:'Guest'  }</p>
                                    <p className='text-sm'>{comment.recProductName}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex items-center gap-2 my-4'>
                            <img className='w-10 rounded-full h-10' src={comment[0]?.recommender_photo} alt="" />
                            <div className='py-[2px] px-2 dark:bg-gray-800 bg-gray-200 border-[1px] rounded-md w-[300px]'>
                                <p className='font-bold text-sm'>{comment[0]?.recommender_disPlayName?comment[0]?.recommender_disPlayName:'Guest'}</p>
                                <p className='text-sm'>{comment[0]?.recProductName}</p>
                            </div>
                        </div>
                    )}
                    {comment?.length > 1 && (
                        <button className='font-semibold border-t-[1px] pt-2 w-full'
                            onClick={() => setShowAllComments(!showAllComments)}

                        >
                            {showAllComments ? 'Show Less' : 'See All Comments...'}
                        </button>
                    )}
                </>
            )}

        </div>


    </div>


</div>
<div className='text-center w-full'>
    <Link to={`/queries/details/${_id}`}><button className=' dark:bg-white bg-gray-800 dark:text-gray-800  text-sm text-white px-2 py-1 mb-4 rounded-t-md rounded-b'> Recommendation </button></Link>
</div>

</div>
        </Zoom>
    );
};

export default Card;