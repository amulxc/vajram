import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import whill from "/src/assets/images/whill.webp";
import tiger from "/src/assets/images/tiger.webp";
import GP from "/src/assets/images/GP-Logo-Original.webp";
import acer from "/src/assets/images/Group-1000010967.webp";
import daewoo from "/src/assets/images/logo7.webp";
import tadepole from "/src/assets/images/tadepole.webp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

const swipercontent = [
  { Image: acer, title: "Acer Electric", text: "Manufacturing premium electric scooters and bicycles for international markets." },
  { Image: whill, title: "WHILL", text: "Producing smart wheelchairs for enhanced healthcare mobility." },
  { Image: daewoo, title: "Daewoo Motors", text: "Manufacturing the eMatiz reverse trike for urban transport." },
  { Image: tiger, title: "Tiger Electric Auto", text: "Developing commercial three-wheelers for logistics and last-mile delivery." },
  { Image: GP, title: "Green Pioneer Mobility", text: "Entering healthcare mobility with assistive devices for seniors and individuals with limited mobility." },
  { Image: tadepole, title: "Tadpole", text: "Collaborating on retrofitting services with IIT-Delhi, allowing businesses to convert their fleets to electric." },
];

export default function Partnership_slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="bg-[#f9f7f2] py-20">
        <div className="container mx-auto">
          {/* Thumbnail Swiper */}
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, FreeMode, Navigation]}
            className="mySwiper"
          >
            {swipercontent.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`flex justify-center h-[200px] items-center border ${activeIndex === index ? 'bg-white' : ''}`}
              >
                <img
                  src={item.Image}
                  className="w-[200px] h-[100px] object-contain p-3"
                  alt={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Active Slide Content */}
          <div className="text-center mt-8">
            <p className="font-bold text-lg">{swipercontent[activeIndex].title}</p>
            <p className="text-sm mt-2">{swipercontent[activeIndex].text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
