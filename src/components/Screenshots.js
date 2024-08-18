import React from 'react';
import NavBar from './Nav';
import '../styles/Screenshots.css';
import Img1 from '../media/namibot1.webp';
import Img2 from '../media/namibot3.webp';
import Img3 from '../media/namibot4.webp';
const Screenshots = () => {
  return (
    <div>
      <NavBar />

      <div className='card shadow-sm'>
        <h5>Nami Bot's Discord outputs</h5>
        <div className='ss-grid'>
          <div>
            <img id='ss-img' src={Img1} alt='Screenshot from Nami bot´s Discord output' />
            <img id='ss-img' src={Img2} alt='Screenshot from Nami bot´s Discord output' />
          </div>
          <div>
            <img id='ss-img' style={{ height: '100%' }} src={Img3} alt='Screenshot from Nami bot´s Discord output' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screenshots;
