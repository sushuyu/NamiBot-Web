import React from 'react';
import '../styles/ChatOutput.css';
import outputImg from '../media/coven_nami.jpg';

const ChatOutput = ({ messages }) => {
  return (
    <div id='output' className="flex-grow-1 overflow-auto mb-3 w-100" style={{ maxHeight: '400px' }}>
      {messages.map((msg, index) => (
        <div key={index} className={`d-flex ${msg.user === 'You' ? 'justify-content-end' : 'justify-content-start'} mb-2`}>

          {msg.user === 'Bot' && (
            <div className="d-flex align-items-start">
              <img src={outputImg} alt="Bot" className="bot-image" />
              <div className={`p-2 rounded ${msg.user === 'You' ? 'bg-primary text-white' : 'bg-secondary text-white'} ml-2`}>
                <span>{msg.text}</span>
              </div>
            </div>
          )}

          {msg.user === 'You' && (
            <div className={`p-2 rounded ${msg.user === 'You' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
              <span>{msg.text}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatOutput;