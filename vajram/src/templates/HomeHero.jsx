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
    zIndex: '9999', // Ensure modal appears on top of everything
  },
  overlay: {
    zIndex: '9999', // Ensure modal overlay appears above the slider and everything else
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
    <div style={{ position: 'relative', zIndex: '1' }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        modules={[Navigation, Pagination]}
        style={{ zIndex: '1', height: '100vh' }} // Set swiper to full viewport height
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} style={{ height: '100vh' }}>
            <div style={{ position: 'relative', textAlign: 'center', height: '100%' }}>
              {/* Placeholder Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{
                  display: videoLoaded ? 'none' : 'block', // Hide when video is loaded
                  width: '100%',
                  height: '100vh', // Full height of viewport
                  objectFit: 'cover',
                }}
              />

              {/* Background Video */}
              {slide.videoUrl && (
                <video
                  style={{
                    display: videoLoaded ? 'block' : 'none', // Show when video is loaded
                    width: '100%',
                    height: '100vh', // Full height of viewport
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
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

              {/* Content in the middle of the slider */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  transform: 'translate(0%, -50%)',
                  zIndex: '1',
                  textAlign: 'center',
                  color: '#fff',
                  padding: '20px',
                  width: '100%',
                  maxWidth: '800px',
                }}
              >
                {/* Heading */}
                <h1 className='text-light text-left md:text-7xl text-5xl'>
                  {slide.title}
                </h1>


                {/* Buttons */}
                <div className='text-left' style={{ marginTop: '2rem' }}>
                  {slide.link && slide.buttonText && (
                    <a
                      href={slide.link}
                      className="link-btn "
                      style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        marginRight: '10px',
                        cursor: 'pointer',
                      }}
                    >
                      {slide.buttonText}
                    </a>
                  )}

                  <button
                    onClick={() => openModal(slide.videoPopupUrl)}
                    className="popup-btn bg-light rounded-full p-5
"
                    style={{
                    
                      cursor: 'pointer',
                    }}
                  >
                    <svg class="noFlip  h-8 " xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7.7 19a.7.7 0 01-.3-.1.8.8 0 01-.4-.7V5.8a.8.8 0 01.4-.7.7.7 0 01.7 0l10.2 6.2a.8.8 0 01.4.7.8.8 0 01-.4.7L8.1 18.9a.7.7 0 01-.4.1z"></path>
  <path d="M7.7 19.8a1.5 1.5 0 01-.7-.3 1.5 1.5 0 01-.7-1.3V5.8A1.6 1.6 0 017 4.5a1.5 1.5 0 011.5 0l10.2 6.2a1.5 1.5 0 01.7 1.3 1.6 1.6 0 01-.7 1.3L8.5 19.5a1.5 1.5 0 01-.8.3zm0-1.5zm0-12.6v12.5L18 12z"></path>
</svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div
        className="custom-prev"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          zIndex: '2',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          style={{ transform: 'rotate(180deg)' }} // Rotate for left arrow
        >
          <path
            fillRule="evenodd"
            d="M22.5 12.4a.5.5 0 000-.8l-5.8-5a.5.5 0 00-.7.7l2.6 4H2.1a.8.8 0 000 1.4h16.5l-2.6 4a.5.5 0 00.7.7l5.8-5z"
            clipRule="evenodd"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div
        className="custom-next"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          zIndex: '2',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            d="M22.5 12.4a.5.5 0 000-.8l-5.8-5a.5.5 0 00-.7.7l2.6 4H2.1a.8.8 0 000 1.4h16.5l-2.6 4a.5.5 0 00.7.7l5.8-5z"
            clipRule="evenodd"
            fill="currentColor"
          ></path>
        </svg>
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
          style={{
            float: 'right',
            padding: '5px 10px',
            backgroundColor: 'red',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
        {videoUrl && (
          <iframe
          id="youtubeVideo"
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
