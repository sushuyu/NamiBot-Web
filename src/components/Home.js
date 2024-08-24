import React from 'react';
import NavBar from '../components/Nav';
import ChatWindow from '../components/ChatWindow';

const Home = () => {
  return (
    <div className="d-flex justify-content-center vh-100">
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <NavBar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;