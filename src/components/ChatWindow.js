import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';
import '../styles/ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const parseCommand = (command) => {
    let text = command.toLowerCase();
    const exclamation = "!";
    if (text.startsWith(exclamation)) {
      text = text.substring(1);
    }

    let region = "";
    let type = "";

    const clash = "clash";
    const status = "status";

    if (text.startsWith(clash)) {
      region = text.substring(clash.length);
      type = "clash";
    } else if (text.startsWith(status)) {
      region = text.substring(status.length);
      type = "status";
    } else {
      throw new Error("Invalid command");
    }

    if (region === "na") {
      region = "na1";
    } else if (region === "euw") {
      region = "euw1";
    } else if (region === "eun") {
      region = "eun1";
    } else if (region === "oc") {
      region = "oc1";
    } else if (region === "debug") {
      region = "debug";
    } else {
      region = "invalid";
    }

    return { region, type };
  };

  const handleSendMessage = async (message) => {
    // Clear previous output
    setMessages([{ user: 'You', text: message }]);
    setLoading(true);
    setError(null);

    try {
      const { region, type } = parseCommand(message);

      if (region === "invalid") {
        throw new Error("Invalid region");
      }

      // Fetch response from the API
      const response = await fetch('https://nami-api.truffel.dev/api/request/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "region": region,
          "type": type,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      // Format the response based on the type
      const [serverStatus, maintenanceInfo] = type === "status"
        ? formatStatusResponse(data)
        : formatClashResponse(data);

      // Set the bot's response
      setMessages(prevMessages => [
        ...prevMessages,
        { user: 'Bot', text: serverStatus },
        { user: 'Bot', text: maintenanceInfo },
      ]);
    } catch (error) {
      setError(error.message);
      setMessages(prevMessages => [
        ...prevMessages,
        { user: 'Bot', text: `Error: ${error.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatClashResponse = (data) => {
    return data.map(event => {
      const { nameKey, nameKeySecondary, schedule } = event;
      return `Event: ${nameKey} - ${nameKeySecondary}\n` +
        schedule.map(s =>
          `  Registration: ${new Date(s.registrationTime).toLocaleString()}\n` +
          `  Start Time: ${new Date(s.startTime).toLocaleString()}\n` +
          `  Cancelled: ${s.cancelled ? 'Yes' : 'No'}`).join('\n');
    }).join('\n\n');
  };

  const formatStatusResponse = (data) => {
    const { name, maintenances } = data;

    // Format the server status
    let serverStatus = `${name} server status\n\n`;

    // Format the maintenances
    let maintenanceInfo = '';

    if (maintenances && maintenances.length > 0) {
      maintenanceInfo += 'Maintenances:\n\n';
      maintenanceInfo += maintenances.map(maintenance => {
        const { titles, updates } = maintenance;
        return `Title: ${titles.map(t => t.content).join(', ')}\n\n` +
          `Update: ${updates.map(u => u.translations.map(t => t.content).join(', ')).join(', ')}\n\n`;
      }).join('\n\n');
    } else {
      maintenanceInfo = 'No maintenances currently scheduled.\n';
    }

    return [serverStatus, maintenanceInfo];
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