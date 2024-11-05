import React from 'react';

const Imagetextpara = ({ image, heading, description,btntxt,btnlink }) => {
  return (
    <section className='bg-dark'>
    <div className="container md:container flex flex-col md:flex-row md:items-center  mx-auto">
      <div className="basis-full md:basis-6/12 md:py-20">
      <img src={image}   alt={heading}    className="w-full h-full md:h-54 object-cover"/>
      </div>
      <div className="basis-full md:basis-6/12 ps-5 md:ps-20">
      <h2 className='py-4 text-light'>{heading}</h2>
      <p className='pb-10 text-light'> {description}</p>
      <a href={btnlink}className='btn white-btn'>{btntxt}</a>
      </div>
    </div>
    </section>
  );
};

export default Imagetextpara
