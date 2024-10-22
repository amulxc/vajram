import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageTabsComponent = () => {
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

  // Images corresponding to each tab
  const images = [
    'https://www.vajramelectric.com/wp-content/uploads/2024/10/whill.webp', // Replace with your image paths
    'https://www.vajramelectric.com/wp-content/uploads/2024/02/change.png',
    'path-to-image3.jpg',
    'path-to-image4.jpg',
  ];

  // Tabs content
  const tabs = [
    {
      title: 'Future-proof capital projects & infrastructure',
      description: 'Circular economy, internet of things & robotics',
    },
    {
      title: 'Cognitive cities, autonomous vehicles & digital twins',
      description: 'Worker welfare, training & livability for all',
    },
    // Add more tabs as needed
  ];

  // Desktop version with hover effects
  const renderDesktopView = () => (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Left: Image container */}
      <div className="relative w-1/2 h-96">
        {/* Image with fade and zoom transition */}
        <img
          key={currentImage} // Ensures re-render when image changes
          src={images[currentImage]}
          alt="Hovered"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100 opacity-0"
          style={{
            opacity: 1,  // Ensures smooth fade-in on image change
            transform: 'scale(1)', // Ensures smooth zoom-in on image change
          }}
        />
      </div>

      {/* Right: Text/tabs container */}
      <div className="w-1/2 px-10">
        <h2 className="text-xl font-bold text-yellow-700">LEADING THE WORLD IN</h2>

        {/* Tabs */}
        <div className="mt-6 space-y-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => setCurrentImage(index)} // Change image on hover
            >
              <h3 className="text-xl font-semibold text-gray-900 hover:text-yellow-700 transition-colors">
                {tab.title}
              </h3>
              <p className="text-gray-500">{tab.description}</p>
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
              <h3 className="text-lg font-semibold text-gray-900">{tab.title}</h3>
              <p className="text-gray-500">{tab.description}</p>
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
