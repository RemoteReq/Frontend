import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RR-cobalt.png';
import Eauth from '../EAuth/EAuth.jsx';

const ENav = (props) => {
  const history = useHistory();

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
              history.push('/employer/signin');
            });
          }}
        >Sign out</a>
      </div>
    </nav>
  );
};

export default ENav;