import React from 'react';
import { Link } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RR-cobalt.png';
import Eauth from '../EAuth/EAuth.jsx';

const ENav = (props) => {
  return (
    <nav className='dashboard-navBar'>
      <Link className='dashboard-home stealth-link' to="/employer/dashboard">
        <img src={ RemoteReq } className='remotereq-name' alt='remote' />
        <p>Dashboard</p>
      </Link>

      <div className='dashboard-links'>

        <a className="large-link"
          onClick={() => {
            return Eauth.logout(() => {
              props.updateRedirect();
            });
          }}
        >Sign out</a>
      </div>
    </nav>
  );
};

export default ENav;