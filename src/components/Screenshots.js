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
    <div>
      <NavBar />

      <div className='card shadow-sm'>
        <h5>{view === 'original' ? "Nami Bot's Discord outputs" : "Nami Bot's web outputs"}</h5>
        <div className={layoutClass}>
          {images.map((img, index) => (
            <div key={index}>
              <img id='ss-img' src={img} alt={`Screenshot ${index + 1}`} />
            </div>
          ))}
        </div>

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
    </div>
  );
};

export default Screenshots;