import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';
import formatAPI from '../utils/FormatMaintUpdate';
import formatClash from '../utils/FormatClash';
import '../styles/ChatWindow.css';

const API_URL = import.meta.env.VITE_API_URL || 'https://nami-api.truffel.dev/api/request/';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const parseCommand = (command) => {
    let text = command.toLowerCase().trim();

    if (text.startsWith('/')) {
      text = text.substring(1); // remove the '/'
    } else {
      throw new Error('Invalid command');
    }

    let region = '';
    let type = '';

    if (text.startsWith('clash')) {
      region = text.substring('clash'.length).trim();
      type = 'clash';
    } else if (text.startsWith('status')) {
      region = text.substring('status'.length).trim();
      type = 'status';
    } else {
      throw new Error('Invalid command');
    }

    switch (region) {
      case 'na':
        region = 'na1';
        break;
      case 'euw':
        region = 'euw1';
        break;
      case 'eune':
        region = 'eun1';
        break;
      case 'oce':
        region = 'oc1';
        break;
      case 'debug':
        region = 'debug';
        break;
      default:
        region = 'invalid';
    }

    return { region, type };
  };

  const handleSendMessage = async (message) => {
    setMessages([{ user: 'You', text: message }]);
    setLoading(true);
    setError(null);

    try {
      const { region, type } = parseCommand(message);

      if (region === 'invalid') {
        throw new Error('Invalid region');
      }

      const response = await fetch("https://nami-api.truffel.dev/api/request/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          region: region,
          type: type,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      let formattedResponse = "";

      if (type === 'clash') {
        formattedResponse = formatClash(data);
      } else if (type === 'status') {
        formattedResponse = formatAPI(data);
      } else {
        throw new Error('Unknown command type')
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'Bot', text: formattedResponse },
      ]);
    } catch (error) {
      setError(error.message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'Bot', text: `${error.message}.` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (command) => {
    handleSendMessage(command);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body align-items-center d-flex flex-column">
        <h4>Try inputting&nbsp;
          <button id="code-btn-1" onClick={() => handleButtonClick('/status NA')}>
            <code>/status <span style={{ color: 'yellow' }}>NA</span></code>
          </button>

          &nbsp;or&nbsp;

          <button id="code-btn-2" onClick={() => handleButtonClick('/clash EUW')}>
            <code>/clash <span style={{ color: 'yellow' }}>EUW</span></code>
          </button>
        </h4>

        <small><i><code style={{ fontSize: '0.9rem' }}>/statusdebug</code> and <code style={{ fontSize: '0.9rem' }}>/clashdebug</code> will simulate real API responses</i></small>

        {loading && <small className="chat-status">Nami Bot is thinking...</small>}

        <div className='d-flex flex-column chat-output w-100'>
          <ChatOutput messages={messages} />
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
