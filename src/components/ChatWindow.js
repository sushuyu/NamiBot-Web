import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';
import '../styles/ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // clear prev output
    setMessages([{ user: 'You', text: message }]);

    // simulate bot response
    setTimeout(() => {
      setMessages([{ user: 'You', text: message }, { user: 'Bot', text: 'This is a response.' }]);
    }, 100);
  };

  const handleButtonClick = (command) => {
    handleSendMessage(command);
  };

  return (
    <div className="card shadow-sm w-100">
      <div className="card-body align-items-center d-flex flex-column w-100">
        <h4>Try inputting&nbsp;
          <button id="code-btn-1" onClick={() => handleButtonClick('!statusNA')}>
            <code>!statusNA</code>
          </button>

          &nbsp;or&nbsp;

          <button id="code-btn-2" onClick={() => handleButtonClick('!clashEUW')}>
            <code>!clashEUW</code>
          </button>
        </h4>

        <small><i>all regions: NA, EUW, EUNE, OCE</i></small>

        <div className='flex w-100 mt-5'>
          <ChatOutput messages={messages} />
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;