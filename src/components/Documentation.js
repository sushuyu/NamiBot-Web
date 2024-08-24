import React from 'react';
import '../styles/Documentation.css'
import '../styles/ChatWindow.css'
import NavBar from './Nav';

const Documentation = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      < NavBar />

      <div id="documentation" className='card shadow-sm'>
        <div>
          <section>
            <h4>How to use</h4>
            <p>
              Simply type the command with <code>!</code> as the prefix in the chat followed by the region, and Nami Bot will fetch the current available information according to the API.
            </p>
          </section>

          <section className="features">
            <h4>Commands</h4>
            <p>Nami Bot uses two main commands which are case-insensitive:</p>
            <ul>
              <li>
                <strong>!clash &lt;region&gt;</strong><br />
                Gets the latest Clash tournament schedules for the specified region.<br />
                Example: <code>!clashna</code>, <code>!clashNa</code> or <code>!clashNA</code> gives the information available in the API for the NA region.
              </li>
              <li>
                <strong>!status &lt;region&gt;</strong><br />
                Allows the user to check the current server status for the specified region.<br />
                Example: <code>!statuseuw</code>, <code>!statusEuw</code> or <code>!statusEUW</code> gives the information available in the API for the EUW region.
              </li>
            </ul>
          </section>

          <section id='region-api' className="d-flex flex-column justify-content-between">
            <div className='mt-2 mb-3'>
              <h4>Available command regions</h4>
              <p>Additional regions will not be added.</p>
              <br />
              <div id='regions' className='d-flex justify-content-around'>
                <h2 style={{ color: '#ff8a8a' }}>NA</h2>
                <h2 style={{ color: '#f7ff8a' }}>EUW</h2>
                <h2 style={{ color: '#98ff8a' }}>EUNE</h2>
                <h2 style={{ color: '#8aedff' }}>OCE</h2>
              </div>
            </div>

            <div className='apis'>
              <h4>APIs</h4>
              <p>Nami Bot uses the RIOT APIs for fetching data.</p>
              <div className='mb-2'>
                <strong>CLASH-V1</strong><br />
                <a id='api-link' href='https://developer.riotgames.com/apis#clash-v1/GET_getTournaments' target='_blank' rel='noopener noreferrer'>
                  <code>/lol/clash/v1/tournaments</code>
                </a>  - Clash data
              </div>

              <div>
                <strong>LOL-STATUS-V4</strong><br />
                <a id='api-link' href='https://developer.riotgames.com/apis#lol-status-v4/GET_getPlatformData' target='_blank' rel='noopener noreferrer'>
                  <code>/lol/status/v4/platform-data</code>
                </a> - Server status data
              </div>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
};

export default Documentation;
