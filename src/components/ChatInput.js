import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} id='form' className="d-flex mt-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Type your message..."
        value={message}
        style={{ backgroundColor: '#ffffffb2' }}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="btn" style={{ backgroundColor: 'rgba(15, 17, 31, 0.6)', color: 'white' }}>Send</button>
    </form>
  );
};

export default ChatInput;
