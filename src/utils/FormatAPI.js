const formatAPI = (data) => {
  if (!data || !data.status) return 'Invalid response from server';

  const { name, locales, maintenances } = data.status;
  let formattedMessage = `Region: ${name}\nLocales Supported: ${locales.join(', ')}\n\n`;

  if (maintenances && maintenances.length > 0) {
    maintenances.forEach((maintenance, index) => {
      formattedMessage += `Maintenance ${index + 1}:\n`;
      formattedMessage += `  - ID: ${maintenance.id}\n`;
      formattedMessage += `  - Created At: ${new Date(maintenance.created_at).toLocaleString()}\n`;
      maintenance.titles.forEach((title) => {
        formattedMessage += `  - ${title.locale}: ${title.content}\n`;
      });
      formattedMessage += `\n`;
    });
  } else {
    formattedMessage += 'No maintenances currently scheduled.\n';
  }

  return formattedMessage;
};

export default formatAPI;
