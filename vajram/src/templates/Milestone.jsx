import React from 'react';

const Milestone = ({  number,symbol, text }) => {
  return (
  
     <div className="grid justify-center ">
        <div className="p-12 flex md:flex-row flex-col justify-start gap-12	md:items-center items-start min-w-fit		md:min-w-[600px]	 ">
          <h2 className=' text-dark text-left	md:text-center flex flex-row items-center gap-3'><span className='text-light  text-6xl text-stroke-yellow'>{number}</span> {symbol}</h2>
          <p className=' text-dark text-left md:text-center'>{text}</p>
        </div>
        </div>
     
  );
};

export default Milestone;
