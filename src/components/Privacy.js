import React from 'react';
import '../styles/Privacy.css'
import NavBar from './Nav';

const Privacy = () => {
  return (
    <div className='w-50'>
      <NavBar />

      <div id="privacy-policy" className="card shadow-sm">
        <h3>Privacy Policy</h3>

        <section>
          <h5>Service Description</h5>
          <p>Nami Bot is designed exclusively for use within the r/lol Discord server and is not available for installation or use on other servers. This restriction ensures that the bot’s functionalities are used in the intended environment and that we can maintain control over its usage and data interactions.</p>
        </section>

        <section>
          <h5>Information Collection</h5>
          <p>Your privacy is important to us. We do not collect any personal information from users through our Discord bot or this website. Our bot interacts with the Riot Games API to provide a service related to Clash tournament schedules and server status. We do not collect or store personal data from these interactions.</p>
        </section>

        <section>
          <h5>Bot Interaction Data</h5>
          <p>We do not log or store any messages sent to our Discord bot. The bot responds only to commands related to Clash and server status and does not include any links or personal data in its responses unless the API is to include them by itself.</p>
        </section>

        <section>
          <h5>Data Security</h5>
          <p>While we do not collect personal data, we take security seriously and ensure that the bot and website are secure from unauthorized access. Only authorized personnel can access the bot and its code.</p>
        </section>

        <section>
          <h5>Contact</h5>
          <p>For any questions about this privacy policy, please contact <span>suushi_</span> on Discord.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
