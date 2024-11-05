import React, { useEffect } from 'react';
import Headersubpages from '../templates/Headersubpages.jsx';

export default function InvestorApplication() {
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
        title="Vajram Application Form"
        frameBorder="0"
        style={{ height: '2200px', width: '99%', border: 'none' }}
        src="https://forms.zohopublic.com/ebikego/form/VajramApplicationForm/formperma/MDZWmj5634CAqgVPsa3EVdFYOB6GlbiAlm9mOUnKXkI"
      ></iframe>
    </div>
  );
}
