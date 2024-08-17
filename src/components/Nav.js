import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLock, FaBookOpen } from 'react-icons/fa'
import '../App.css';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const NavBar = () => {
  return (
    <nav className='d-flex justify-content-between align-items-center'>
      <NavLink to="/" style={{ textDecoration: 'none' }}><h2>NamiBot</h2></NavLink>

      <ul class="nav mb-2 ">
        <li class="nav-item">
          <NavLink to="/documentation"><FaBookOpen />
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/documentation"><FaGithub />
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy"><FaLock />
          </NavLink>
        </li>
      </ul>
    </nav >
  );
};

export default NavBar;
