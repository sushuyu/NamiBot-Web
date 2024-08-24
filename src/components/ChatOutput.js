import React from 'react';
import '../styles/ChatOutput.css';
import outputImg from '../media/coven_nami.jpg';

const ChatOutput = ({ messages }) => {
  return (
    <div id='output' className="flex-grow-1 overflow-auto mb-3" style={{ maxHeight: '600px' }}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`d-flex ${msg.user === 'You' ? 'justify-content-end' : 'justify-content-start'} mb-2`}>

          {msg.user === 'Bot' && (
            <div className="d-flex align-items-start ">
              <img src={outputImg} alt="Coven Nami Avatar" className="bot-image" />
            </div>
          )}

          <div
            id='user-bubble'
            className={`p-2 rounded ${msg.user === 'You' ? 'custom-bg-1 text-white' : 'custom-bg-2 text-white'} ${msg.user === 'Bot' ? 'ml-2' : ''}`}>
            <span>{msg.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatOutput;

/*
flex-grow-1 overflow-auto mb-3
*/