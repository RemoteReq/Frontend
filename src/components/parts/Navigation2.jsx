import React from 'react';
import { Link } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RR-cobalt.png';
import auth from '../Auth/Auth.jsx';

const Navigation2 = (props) => (
    <nav className='dashboard-navBar'>
      <Link className='dashboard-home stealth-link' to="/dashboard">
        <img src={ RemoteReq } className='remotereq-name' alt='remote' />
        <p>Job Board</p>
      </Link>

      <div className='dashboard-links'>

        <a className="large-link"
          onClick={() => auth.logout(() => {
            props.updateRedirect();
          })}
        >Sign out</a>
      </div>
    </nav>
);

export default Navigation2;