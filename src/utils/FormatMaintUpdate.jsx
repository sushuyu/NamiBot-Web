import './Format.css';

const formatAPI = (data) => {
  if (!data || !data.id || !data.name || !data.maintenances) {
    return 'Invalid response from server (status)';
  }

  const { name, maintenances } = data;

  let maintenanceMsg = "";
  let updateMsg = "";
  let maintenanceDate = "";
  let maintenanceTime = "";
  let maintenanceContent = "";
  let updateDate = "";
  let updateTime = "";
  let updateContent = "";

  if (Object.keys(maintenances).length > 0) {
    Object.values(maintenances).forEach((maintenance) => {
      const createdAt = new Date(maintenance.created_at);
      const formatDate = createdAt.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
      const formatTime = createdAt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

      maintenanceDate += `${formatDate}\n`;
      maintenanceTime += `${formatTime}\n`;

      if (maintenance.titles && Object.keys(maintenance.titles).length > 0) {
        Object.values(maintenance.titles).forEach((title) => {
          maintenanceContent += `\n${title.content}\n`;
        });
      }

      if (maintenance.updates && Object.keys(maintenance.updates).length > 0) {
        Object.values(maintenance.updates).forEach((update) => {
          const updatedAt = new Date(update.created_at);
          const formatDate2 = updatedAt.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
          const formatTime2 = updatedAt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

          updateDate += `${formatDate2}\n`;
          updateTime += `${formatTime2}\n`;

          if (update.translations && Object.keys(update.translations).length > 0) {
            Object.values(update.translations).forEach((translation) => {
              updateContent += `${translation.content}\n`;
            });
          }
        });
      }
    });

  } else {
    maintenanceMsg += `No maintenance info available.\n`;
    updateMsg += `No updates available.\n`;
  }


  return (
    <div id="server-status">
      <div className='d-flex flex-column'>
        <div>
        </div>
        <h5>{name} ({data.id}) - Server Status</h5>
      </div>

      <div id='maintenance'>
        <div className='mb-2'>
          <strong>Maintenances</strong>
        </div>
        <div className='d-flex flex-column'>
          <div>
            <small>{maintenanceDate} {maintenanceTime}</small>
          </div>
          {maintenanceContent}
          {maintenanceMsg}
        </div>
      </div>

      <div id='updates'>
        <div className='mb-2'>
          <strong>Updates</strong>
        </div>
        <div className='d-flex flex-column'>
          <div>
            <small>{updateDate} {updateTime}</small>
          </div>
          {updateContent}
          {updateMsg}
        </div>
      </div>
    </div>
  );
};

export default formatAPI;