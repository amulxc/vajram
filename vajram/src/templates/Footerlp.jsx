import React from 'react';
import vajramlogo from '../assets/images/vajramlogo.webp'

export default function Footerlp() {
  return (
  
     <>
      <footer>
    <div class="bg-dark  px-4 lg:px-6 py-5 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
                <img src={vajramlogo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </a>
            <p className='text-light text-sm'>Copyright © 2024. All rights reserved.</p>
           
           
        </div>
    </div>
</footer>

     </>
       
     
  );
};


