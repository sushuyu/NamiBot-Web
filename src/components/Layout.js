import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';
import bgVideo from '../media/vecteezy_blue-ocean-underwater-with-sun-shine-background-loop_15472744.mp4';

const Layout = () => {
  return (
    <div className="layout d-flex flex-column justify-content-center">
      <video id='video' src={bgVideo} autoPlay loop muted />
      <a id='attribution' href="https://www.vecteezy.com/free-videos/underwater-animation" target='_blank'>
        Underwater Animation Stock Videos by Vecteezy
      </a>
      <div className="content">
        <Outlet />
      </div>

      <div className='d-flex justify-content-center'>
        <small id='small'>
          Nami Bot is not affiliated with Riot Games.
        </small>
      </div>
    </div>
  );
};

export default Layout;
