import { MdOutlineChevronRight } from "react-icons/md";
import React, { useState, useEffect } from 'react';

// Sample image for the background
import images from "/src/assets/images/dummy.webp";
import images1 from "/src/assets/images/v-4-1.webp";
import images2 from "/src/assets/images/v-900.webp";
import images3 from "/src/assets/images/v-2.webp";
import images4 from "/src/assets/images/v-1.webp";

const content = [
  { bgimage: images1, title: "EV Two-Wheelers & e-Bicycles", text: "Performance and durability redefined for the Indian market." },
  { bgimage: images2, title: "e-Auto", text: "Efficient, robust, and sustainable – redefining urban mobility." },
  { bgimage: images3, title: "e-Trike", text: "The agility of a bike, the comfort of a car—an eco-friendly urban solution." },
  { bgimage: images, title: "e-Tractors", text: "Sustainable power revolutionizing agriculture." },
  { bgimage: images4, title: "Smart Electric Wheelchairs", text: "Empowering mobility solutions that transform lives." }
];

export default function Ev_Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section>
      <div className="flex relative md:h-[80vh] h-auto" id="Capabilities">
        {/* Wrapper Div for Positioning */}
        <div className="relative flex flex-col md:flex-row h-full w-full">
          {content.map((item, index) => (
            <div
              key={index}
              className={`relative p-10 bg-cover bg-center bg-no-repeat w-full md:${
                hoveredIndex === index ? 'w-3/5' : 'w-1/5'
              } transition-[width] duration-500 ease-in-out cursor-pointer`}
              style={{ backgroundImage: `url(${item.bgimage})` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleItemClick(index)}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black opacity-80"></div>

              {/* Content */}
              <div className="relative z-10">
                <p className="border-l-4 pl-5 h-16 border-yellow-300 text-white uppercase mt-5 flex justify-between">
                  {item.title} <MdOutlineChevronRight className="w-7 md:hidden" />
                </p>
                
                {(hoveredIndex === index || activeIndex === index) && (
                  <p className="pt-5 text-white mt-4 text-left animate-fadeUp">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          ))}
          {/* Place the <h1> outside the loop */}
          {hoveredIndex === null && activeIndex === null && (
            <h1 className="absolute hidden md:block top-[45%] w-full flex justify-center items-center text-center text-white z-20 pointer-events-none">
              Tailored for India
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}