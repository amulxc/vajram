import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageTabsComponent = ({ tabs, images, heading }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(0); // Track the hovered tab index

  // Track window width to toggle between mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop version with hover effects
  const renderDesktopView = () => (
    <div className="flex items-center justify-center h-screen bg-gray-100" id="Portfolio">
      {/* Left: Image container */}
      <div className="relative w-1/2 h-[100vh]">
        {/* Image with fade and zoom transition */}
        <img
          key={currentImage} // Ensures re-render when image changes
          src={images[currentImage]}
          alt="Hovered"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100 opacity-0 "
          style={{
            opacity: 1,  // Ensures smooth fade-in on image change
            transform: 'scale(1)', // Ensures smooth zoom-in on image change
          }}
        />
      </div>

      {/* Right: Text/tabs container */}
      <div className="w-1/2 md:ps-32 px-10" >
        <h2 className="text-[20px] text-yellow font-semibold uppercase	 ">{heading}</h2>

        {/* Tabs */}
        <div className="mt-6 space-y-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="cursor-pointer transition-all duration-200 ease-in-out "
              onMouseEnter={() => setCurrentImage(index)} // Change image on hover
            >
              <h3 className="text-[20px] hover:scale-105 text-left origin-left	tabscale text-black opacity-60 hover:opacity-100 transition-all  mt-7 ">
                {tab.title}
              </h3>
              <p className="text-[18px] text-gray hidden">{tab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile version with Swiper slider
  const renderMobileView = () => (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {tabs.map((tab, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center p-4">
            <div className="relative w-full h-60">
              <img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100 hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center">
            <h2 className="text-xl font-normal text-yellow-700 py-8">{heading}</h2>
              <h3 className="text-lg font-normal text-gray-900 pb-8">{tab.title}</h3>
              <p className="text-gray-500 hidden">{tab.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="w-full">
      {/* Conditionally render mobile or desktop view */}
      {isMobile ? renderMobileView() : renderDesktopView()}
    </div>
  );
};

export default ImageTabsComponent;
