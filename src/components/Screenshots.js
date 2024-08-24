import React, { useState } from 'react';
import NavBar from './Nav';
import '../styles/Screenshots.css';
import Img1 from '../media/namibot1.webp';
import Img2 from '../media/namibot3.webp';
import Img3 from '../media/namibot4.webp';
import WebImg1 from '../media/namibotweb1.webp';
import WebImg2 from '../media/namibotweb2.webp';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Screenshots = () => {
  const [view, setView] = useState('original');

  const originalImages = [Img1, Img2, Img3];
  const newImages = [WebImg1, WebImg2];

  const images = view === 'original' ? originalImages : newImages;
  const layoutClass = view === 'original' ? 'original-layout' : 'new-images';

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <NavBar />

      <div id='screenshots' className='pb-4 shadow-sm'>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <h5>{view === 'original' ? "Discord outputs" : "Web outputs"}</h5>

          <div className='arrow-buttons'>
            {view === 'original' ? (
              <button onClick={() => setView('new')} className='d-flex align-items-center'>
                Web Outputs &nbsp;<FaArrowRight id='Fa-arr' />
              </button>
            ) : (
              <button onClick={() => setView('original')} className='d-flex align-items-center'>
                <FaArrowLeft id='Fa-arr' />&nbsp; Discord outputs
              </button>
            )}
          </div>
        </div>

        <div id='ss-layout' className={`${layoutClass} mt-4`}>
          {images.map((img, index) => (
            <div key={index} className='d-flex justify-content-center'>
              <img id='ss-img' src={img} alt={`Screenshot ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Screenshots;