import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper and SwiperSlide from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules'; // Import Navigation and Pagination from swiper/modules

import Modal from 'react-modal'; // Add Modal import if missing

// Modal styles for YouTube video popup
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
  },
};

export default function HomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // Dummy slide data
  const slidesData = [
    {
      image: 'https://via.placeholder.com/600x400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      link: 'https://example.com',
      buttonText: 'Learn More',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      videoUrl: '',
      link: 'https://example.com',
      buttonText: 'Explore',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      link: '',
      buttonText: '',
    },
  ];

  const openModal = (videoUrl) => {
    setVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // Enables navigation buttons
        modules={[Navigation, Pagination]} // Add modules directly here
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{ textAlign: 'center' }}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div style={{ marginTop: '20px' }}>
                {/* Popup button */}
                {slide.videoUrl && (
                  <button
                    className="popup-btn"
                    onClick={() => openModal(slide.videoUrl)}
                    style={{
                      marginRight: '10px',
                      padding: '10px 20px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                    }}
                  >
                    Watch Video
                  </button>
                )}
                {/* Link button */}
                {slide.link && slide.buttonText && (
                  <a
                    href={slide.link}
                    className="link-btn"
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      textDecoration: 'none',
                    }}
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for YouTube video */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="YouTube Video"
      >
        <button onClick={closeModal} style={{ float: 'right', padding: '5px 10px', backgroundColor: 'red', color: '#fff', border: 'none' }}>
          Close
        </button>
        {videoUrl && (
          <iframe
            width="100%"
            height="90%"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </div>
  );
}
