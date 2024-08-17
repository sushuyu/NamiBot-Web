import React from 'react';
import NavBar from '../components/Nav';
import ChatWindow from '../components/ChatWindow';

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <NavBar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;