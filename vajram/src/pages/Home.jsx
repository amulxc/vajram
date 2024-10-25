import React from 'react';
import HomeHero from '../templates/HomeHero';
import whoweare from '../assets/icons/livability-icon.svg'
import ImageTabsComponent from '../templates/ImageTabsComponent';
import Business_Verticals from '../templates/Business_Verticals';
import Partnership_slider from '../templates/Partnership_slider';

export default function Home() {

    const slidesData = [
      {
        title: 'Welcome to Our Service',
        image: 'https://via.placeholder.com/1200x500',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Background video URL
        videoPopupUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Popup video URL
        link: 'https://example.com',
        buttonText: 'Learn More',
      },
      {
        title: 'Explore More Features',
        image: 'https://via.placeholder.com/1200x500',
        videoUrl: '', // No background video for this slide
        videoPopupUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        link: 'https://another-example.com',
        buttonText: 'Discover',
      },
    ];
  
    return (
      <div>
        <section >
          <h2>Hero Section with Videos</h2>
          <HomeHero slidesData={slidesData} />
        </section>
        <section className='container-xl flex flex-col items-center p-top p-bottom'>
          <img src={whoweare} alt="" className='w-[100px] pt-6'  />
            <h2 className='text-center py-6'>Powering the the Electric Future of<br/> India</h2>
            <p >Crafting the core of e-mobility, Vajram Electric is the silent powerhouse behind the electric revolution. We forge the future with every e-cycle, three-wheeler and two-wheeler that rolls out, charged with innovation and excellence.</p>
        </section>
        <ImageTabsComponent />
        {/* <Business_Verticals /> */}
        {/* <Partnership_slider /> */}
      </div>
    );
  }