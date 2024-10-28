import React from 'react';
import HomeHero from '../templates/HomeHero';
import whoweare from '../assets/icons/livability-icon.svg'
import ImageTabsComponent from '../templates/ImageTabsComponent';


import Imagetextpara from '../templates/Imagetextpara.jsx';
import IconBox from '../templates/IconBox.jsx';

// images inport
import foodicon from '../assets/icons/foodicon.svg'
import profit from '../assets/icons/profit.svg'
import management from '../assets/icons/management.svg'
import transportation from '../assets/icons/transportation.svg'
import healthcare from '../assets/icons/healthcare.svg'
import ecofriendly from '../assets/icons/eco-friendly.svg'
import improvement from '../assets/icons/improvement.svg'


// milestone
import Headerlp from '../templates/Headerlp.jsx';
import Footerlp from '../templates/Footerlp.jsx';

import Business_Verticals from '../templates/Business_Verticals';
import Partnership_slider from '../templates/Partnership_slider';
import Services_Verticals from '../templates/Services_Verticals.jsx';
import Ev_Portfolio from '../templates/Ev_Portfolio.jsx';
import Milestone from '../templates/Milestone.jsx';

export default function Home() {

    const slidesData = [
      {
        title: 'Invest in Vajram',
        image: 'https://theebg.com/images/wearededicated-d.webp',
        videoUrl: 'https://theebg.com/video/ebg.mp4', // Background video URL
        videoPopupUrl: 'https://www.youtube.com/embed/wQ-e739kURM?si=ZwM4O2Remd7b7W6e&amp;&amp;autoplay=1&amp;mute=0', // Popup video URL
        // link: 'https://example.com',
        buttonText: 'Learn More',
      },
    
    ];
    const Tabs = [
      {
        title: 'Domestic Expansion',
        description:'Establishing 2,000 dealerships and service centers in Tier-2 and Tier-3 cities over the next three years for robust after-sales support.'},
      {
        title: 'International Market Entry'},
      {
        title: 'Product Line Expansion'},
      {
        title: 'Technology as a Service (TaaS)',
      },
      // Add more tabs as needed
    ];
  
    const Images = [
      'https://www.vajramelectric.com/wp-content/uploads/2024/02/WhatsApp-Image-2017-04-20-at-22.16.jpg', // Replace with actual image paths
      'https://www.vajramelectric.com/wp-content/uploads/2024/02/super-soco-cpx-02-1.png',
      'https://www.vajramelectric.com/wp-content/uploads/2024/02/WhatsApp-Image-2017-04-20-at-22.16.jpg', // Replace with actual image paths
      'https://www.vajramelectric.com/wp-content/uploads/2024/02/super-soco-cpx-02-1.png',


    ];

    // icon box content
    const iconboxcontent=[
      {
        icon: profit,  // Replace with actual image URLs
        heading: 'Rapidly Growing EV Market',
        description: 'Projected to hit $800 billion by 2027, driven by environmental awareness and government support for clean energy.',
      },
      {
        icon: management,  // Replace with actual image URLs
        heading: 'Untapped Tier-2 and Tier-3 Cities ',
        description: 'Significant demand for affordable electric mobility solutions, offering unique expansion potential.',
      },
      {
        icon: transportation,  // Replace with actual image URLs
        heading: 'Logistics and Delivery Sector',
        description: 'Booming e-commerce and last-mile delivery creating a substantial market for commercial electric three-wheelers.',
      },
      {
        icon: healthcare,  // Replace with actual image URLs
        heading: 'Healthcare Mobility Solutions ',
        description: 'Rising demand for efficient healthcare transport, presenting opportunities for specialized electric vehicles.',
      },
      {
        icon: ecofriendly,  // Replace with actual image URLs
        heading: 'Sustainability Initiatives ',
        description: 'Government incentives accelerating the shift to electric vehicles, fostering growth opportunities.',
      },
      {
        icon: improvement,  // Replace with actual image URLs
        heading: 'Retrofitting Demand ',
        description: 'Businesses increasingly seek to convert fossil-fuel fleets, opening new revenue streams for cost-effective solutions.',
      },
    ]

    const Milestonecontent =[
      {
        number:'5,500',
        symbol:'+',
        text:'Orders'
      },
      {
        number:'12',
        symbol:'+',
        text:'Products & Innovations'
      },
      {
        number:'2025',
        symbol:'+',
        text:'Transitioning to an IPO listing'
      }
    ]
  
    return (
      <div>
        <section >
          <Headerlp/>
          {/* <h2>Hero </h2> */}
          <HomeHero slidesData={slidesData} />
        </section>
        <section className='container-xl flex flex-col items-center p-top p-bottom  px-4' id='about'>
          <img src={whoweare} alt="" className='h-[100px]'  />
            <h3 className='text-left md:text-center py-8 uppercase'>Powering the Electric Future of India</h3>
            <p className='text-left md:text-center w-full md:w-10/12'>Crafting the core of e-mobility, Vajram Electric is the silent powerhouse behind the electric revolution. We forge the future with every e-cycle, three-wheeler and two-wheeler that rolls out, charged with innovation and excellence.</p>
        </section>
        <Imagetextpara btnlink='#a' btntxt='Learn More'  image='https://www.vajramelectric.com/wp-content/uploads/2024/02/super-soco-cpx-02-1.png' heading='Redefining mobility, maximizing value in the EV industry' description='Founded in 2022, Vajram Electric stands at the forefront of India’s EV revolution, specializing in e-cycles, three-wheelers and two-wheelers. Our vision is to lead the world toward greener paths, driven by a team of industry veterans. Join us as we transition towards a public limited company, aiming for an IPO by 2025-2026.'/>
        <Business_Verticals />
        <Ev_Portfolio />
        {/* <Services_Verticals/> */}
        {/* milestone box */}
        <section className='bg-light '>
        <div className="container md:container  mx-auto py-10 md:py-20 ">
        {Milestonecontent.map((item, index) => (
        <Milestone
          key={index}  
          number={item.number}
          symbol={item.symbol}
          text={item.text}
        />
      ))}
      </div>
        </section>
         {/* icon box */}
         <section className='bg-dark '>
        <div className="container md:container mx-auto py-20">

        
          <h2 className='text-light text-center  pb-10 uppercase'>Market Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3	 ">
        {iconboxcontent.map((item, index) => (
        <IconBox
          key={index}  
          icon={item.icon}
          heading={item.heading}
          description={item.description}/>
      ))}
      </div></div>
        </section>

        <ImageTabsComponent tabs={Tabs}  images={Images}  heading="Growth Strategy"/>
     
        <Partnership_slider />
       
      

        <Footerlp/> 
      </div>
    );
  }