import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules'; 
import Modal from 'react-modal'; 

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

Modal.setAppElement('#root'); 

const HomeHero = ({ slidesData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false); // To handle video load

  const openModal = (videoUrl) => {
    setVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
  };

  // Function to handle when the video has loaded
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }} 
        modules={[Navigation, Pagination]} 
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              {/* Placeholder Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{
                  display: videoLoaded ? 'none' : 'block', // Hide when video is loaded
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'cover',
                }}
              />
              
              {/* Background Video */}
              {slide.videoUrl && (
                <video
                  style={{
                    display: videoLoaded ? 'block' : 'none', // Show when video is loaded
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                  }}
                  onLoadedData={handleVideoLoaded} // Call when video is loaded
                  autoPlay
                  muted
                  loop
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div style={{ marginTop: '20px' }}>
                {/* Popup button */}
                {slide.videoPopupUrl && (
                  <button
                    className="popup-btn"
                    onClick={() => openModal(slide.videoPopupUrl)}
                    style={{
                      marginRight: '10px',
                      padding: '10px 20px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
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

      {/* Custom navigation buttons */}
      <div className="custom-prev" style={{ position: 'absolute', left: '10px', top: '50%', cursor: 'pointer', fontSize: '2rem', color: '#007bff' }}>
        &#10094;
      </div>
      <div className="custom-next" style={{ position: 'absolute', right: '10px', top: '50%', cursor: 'pointer', fontSize: '2rem', color: '#007bff' }}>
        &#10095;
      </div>

      {/* Modal for YouTube video */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="YouTube Video"
      >
        <button
          onClick={closeModal}
          style={{ float: 'right', padding: '5px 10px', backgroundColor: 'red', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
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
};

export default HomeHero;
