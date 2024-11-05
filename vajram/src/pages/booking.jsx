import React, { useEffect } from 'react';
import Headersubpages from '../templates/Headersubpages.jsx';

const Booking = () => {
  useEffect(() => {
    const iframe = document.getElementById('myiframe');
    if (iframe) {
      iframe.src = iframe.src + window.location.search;
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
        <section >
          <Headersubpages/>
        </section>
      <iframe
        id="myiframe"
        width="100%"
        height="750px"
        src="https://acer.zohobookings.com/portal-embed#/3977171000004201212"
        frameBorder="0"
        allowFullScreen
        title="Booking Form"
      ></iframe>
    </div>
  );
};

export default Booking;
