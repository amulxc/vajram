import React from 'react';
import vajramlogo from '../assets/images/vajramlogo.webp'

export default function Headersubpages() {
  return (
  
     <>
      <header>
    <nav class="bg-dark  px-4 lg:px-6 py-5 ">
        <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
                <img src={vajramlogo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </a>
        </div>
    </nav>
</header>





    
     </>
       
     
  );
};


