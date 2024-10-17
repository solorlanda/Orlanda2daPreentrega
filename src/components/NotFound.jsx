import React from 'react';
import notFoundImage from "../assets/notFoundImage.png";

const NotFound = () => (
    <div className='flex justify-center mt-5 rounded-lg'>
        <img className="rounded-lg" src={notFoundImage} alt="" />
    </div>
);

export default NotFound;