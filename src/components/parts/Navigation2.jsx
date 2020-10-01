import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RR-cobalt.png';
import auth from '../Auth/Auth.jsx';

const Navigation2 = (props) => {
  const history = useHistory();

  return (
    <nav className='dashboard-navBar'>
      <Link className='dashboard-home stealth-link' to="/dashboard">
        <img src={ RemoteReq } className='remotereq-name' alt='remote' />
        <p>Job Board</p>
      </Link>

      <div className='dashboard-links'>

        <a className="large-link"
          onClick={() => {
            return auth.logout(() => {
              history.push('/signin');
            });
          }}
        >Sign out</a>
      </div>
    </nav>
  );
};

export default Navigation2;