import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const swipercontent= [
  {Image: "https://swiperjs.com/demos/images/nature-1.jpg", title:"Acer Electric", text: "Manufacturing premium electric scooters and bicycles for international markets."},
  {Image: "https://swiperjs.com/demos/images/nature-2.jpg", title:"WHILL", text: "Producing smart wheelchairs for enhanced healthcare mobility."},
  {Image: "https://swiperjs.com/demos/images/nature-3.jpg", title:"Daewoo Motors", text: "Manufacturing the eMatiz reverse trike for urban transport."},
  {Image: "https://swiperjs.com/demos/images/nature-4.jpg", title:"Tiger Electric Auto", text: "Developing commercial three-wheelers for logistics and last-mile delivery."},
  {Image: "https://swiperjs.com/demos/images/nature-4.jpg", title:"Green Pioneer Mobility", text: "Entering healthcare mobility with assistive devices for seniors and individuals with limited mobility."},
]

export default function Partnership_slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className="container mx-auto">
      <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {swipercontent.map((item,index)=>(
            <SwiperSlide key={index}>
              <img src={item.Image}  className='w-[100px]'/>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {swipercontent.map((item,index)=>(
            <SwiperSlide key={index}>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
