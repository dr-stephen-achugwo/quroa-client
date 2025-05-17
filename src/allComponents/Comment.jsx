/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Comment = ({comment}) => {
    const   {recProductName,recProductBrand,recProductImageURL,recQueryTitle,recReason,recommender_email,recommender_disPlayName,recommender_photo,currentData,recommand_id,owner_email} = comment || {};
    return (
        <div>
            <p ><span className='font-semibold'>comment:</span> {recProductName}</p>
            
        </div>
    );
};

export default Comment;