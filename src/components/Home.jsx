import React from 'react';
import NavBar from '../components/Nav';
import ChatWindow from '../components/ChatWindow';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="d-flex justify-content-center vh-100">
      <div className='div-2 d-flex flex-column justify-content-center align-items-center'>
        <NavBar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;