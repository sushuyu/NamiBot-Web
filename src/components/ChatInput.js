import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatInput.css';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);

  const commands = ['/status', '/clash', '/statusdebug', '/clashdebug'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
      setSuggestions([]);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setMessage(input);

    if (input.startsWith('/')) {
      const filteredSuggestions = commands.filter(cmd =>
        cmd.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        setMessage(suggestions[selectedIndex]);
        setSuggestions([]);
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
    setSuggestions([]);
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} id='form' className="flex-column">
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </div>
          ))}

        </div>
      )}
      <div className='d-flex'>
        <input
          ref={inputRef}
          type="text"
          className="form-control me-2"
          placeholder="Type a /slash command (e.g. /status EUW)..."
          value={message}
          style={{ backgroundColor: '#ffffffb2' }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" id='send-btn' className="btn">Send</button>
      </div>
    </form>
  );
};

export default ChatInput;