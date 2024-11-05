import { MdOutlineChevronRight } from "react-icons/md";
import React, { useState, useEffect } from 'react';

// Sample video for the background
import bgvideo from "/src/assets/videos/Business_Verticals.mp4";

const content = [
  { sno: "01", title: "Manufacturing Powerhouse for Global Brands", text: "We are the trusted manufacturing partner for prestigious brands like Acer Electric and WHILL, producing an array of products including smart wheelchairs and electric scooters." },
  { sno: "02", title: "Commercial Electric Three and Four-Wheelers for Logistics", text: "Developing innovative electric three-wheelers for last-mile delivery in urban and semi-urban areas, in collaboration with Tiger Electric Auto and Zero21, to meet the booming demand for clean transportation." },
  { sno: "03", title: "Retrofitting Services", text: "Our retrofitting solutions transform fossil-fuel vehicles into electric ones, supporting fleet operators and commercial entities on their sustainability journey." }
];

export default function Business_Verticals() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Set the first accordion item open by default for mobile view only
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setActiveIndex(0); // First item is open by default in mobile view
      } else {
        setActiveIndex(null); // Collapse all when the screen is not mobile
      }
    };

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);
    // Trigger the handler on initial load
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (index) => {
    // Always set the clicked index as active for mobile; toggle between open/close.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .custom-height {
          max-height: 240px;
          overflow: hidden;
          transition: max-height 0.5s ease-out, border-right-width 0.5s ease-out;
        }
        .custom-height.open {
          max-height: 900px; /* Expanded height */
          transition: max-height 0.5s ease-in;
        }
        .arrow-icon {
          transition: transform 0.5s ease;
        }
        .arrow-icon.open {
          transform: rotate(90deg); /* Rotate the arrow when expanded */
        }
        .stroke {
          color: transparent;
          -webkit-text-stroke: 1px white;
        }
        .custom-height p.text {
          opacity: 0;
        }
        /* Hover Effect for Desktop View */
        @media (min-width: 768px) {
          .custom-height:hover {
            max-height: 900px;
            transition: max-height 0.5s ease-in, opacity 0.5s ease-in;
          }
          .custom-height:hover p.text {
            opacity: 1; /* Fully visible on hover */
          }
        }

        /* Mobile View Accordion Effect */
        @media (max-width: 768px) {
          .custom-height { max-height: 140px; }
          .custom-height p.text {
            opacity: 0;
          }
          .custom-height.open p.text {
            opacity: 1; /* Fade in content when expanded */
            transition: opacity 0.5s ease-in;
          }
        }
      `}</style>  

      <section className="relative flex h-[700px]" >
        {/* Background video */}
        <video autoPlay muted loop src={bgvideo} type="video/mp4" className="object-cover h-full w-full" />
        
        {/* Overlay content */}
        <div className="container z-10 mx-auto absolute inset-0">
          <p className="text-white p-10 ps-5 md:pt-20 text-md uppercase">Business Verticals</p>
          
          <div className="flex md:flex-row flex-col items-center h-full absolute top-20">
            {content.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col custom-height w-full p-5 py-8 md:p-10 ${activeIndex === index ? 'open' : ''} ${index !== content.length - 1 ? 'md:border-r-[1px] border-[#222528] md:border-b-0 border-b-2' : ''}`}
              >
                {/* Section heading and icon */}
                <div className="flex flex-row md:flex-col w-full relative">
                  <h1 className="stroke text-7xl hidden lg:block text-white">{item.sno}</h1><br />
                  <p className="md:text-md w-4/5 md:w-full font-bold text-white">{item.title}</p>
                  
                  {/* Accordion toggle for mobile view */}
                  <MdOutlineChevronRight
                    className={`arrow-icon lg:hidden absolute right-0 text-white text-2xl w-9 ${activeIndex === index ? 'open' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  />
                </div>

                {/* Section description */}
                <p className={`py-5 text text-white transition-opacity duration-500 ease-in ${activeIndex === index || window.innerWidth >= 768 ? 'opacity-100' : 'opacity-0'}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
