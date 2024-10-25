import React from 'react';

const IconBox = ({ icon, heading, description }) => {
  return (
  
     
        <div className="p-10 md:px-10 md:py-20 shadow-light hover:bg-black bg-dark flex flex-col md:items-center	items-start">
          <img src={icon} alt={heading} className="w-14 h-14" />
          <p className='py-4 text-light font-semibold text-left	md:text-center'>{heading}</p>
          <p className='pb-10 text-light text-left md:text-center'>{description}</p>
        </div>
     
  );
};

export default IconBox;
