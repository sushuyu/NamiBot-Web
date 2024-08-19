import './Format.css';

const capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// format 'day_1' to 'Day 1'
const formatDayString = (dayString) => {
  if (!dayString) return '';
  const parts = dayString.split('_');
  if (parts.length === 2) {
    const dayNumber = parts[1];
    return `Day ${dayNumber}`;
  }
  return dayString;
};

// extract day number for sorting
const extractDayNumber = (dayString) => {
  if (!dayString) return Infinity;
  const parts = dayString.split('_');
  if (parts.length === 2 && !isNaN(parts[1])) {
    return parseInt(parts[1], 10);
  }
  return Infinity;
};

const formatDateTime = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const formatDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  const formatTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
  return `${formatDate} ${formatTime}`;
};

const formatClash = (data) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return 'Invalid response from server (clash)';
  }

  // sort data based on the day number
  const sortedData = data.sort((a, b) => {
    const dayNumberA = extractDayNumber(a.nameKeySecondary);
    const dayNumberB = extractDayNumber(b.nameKeySecondary);
    return dayNumberA - dayNumberB;
  });

  let clashItems = sortedData.map((event, index) => {
    const { nameKey, nameKeySecondary, schedule } = event;
    const firstSchedule = schedule[0] || {};
    const { registrationTime, startTime, cancelled } = firstSchedule;

    const formattedRegTime = formatDateTime(registrationTime);
    const formattedStartTime = formatDateTime(startTime);

    const formattedNameKey = capitalizeFirstLetter(nameKey);
    const formattedNameKeySecondary = formatDayString(nameKeySecondary);

    return (
      <div key={index}>
        <div id='clash-info'>
          <h5>Next Clash: {formattedNameKey} Cup - {formattedNameKeySecondary}</h5>
          <div>
            <div>
              Registration begins on <span>{formattedRegTime}</span>
            </div>
            <div>
              {formattedNameKeySecondary} starts on <span>{formattedStartTime}</span>
            </div>
            {cancelled && (
              <div id='cancelled'>
                This Clash has been cancelled
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="clash-status">
      {clashItems}
    </div>
  );
};

export default formatClash;