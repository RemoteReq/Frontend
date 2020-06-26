import React from 'react';
import RemoteReq from '#assets/images/pngs/RR-cobalt.png';
import ProfileIcon from '#assets/icons/pngs/Profile.png';
import auth from '../Auth/Auth.js';
import { Link } from 'react-router-dom';

const Navigation2 = (props) => {
  console.log('nav props', props)

  let menuVisible;

  if (props.LandingPageMenuVisible === false && screen.width < 481) {
    menuVisible = {
      display: 'none',
    };
  } else {
    menuVisible = {
      display: 'block',
    };
  }

  return (
    <nav className='dashboard-navBar'>
      <div className='dashboard-name-menu'>
        <Link className='Dashboard-Home stealth-link' to="/dashboard">
          <img src={ RemoteReq } className='remotereq-name' alt='remote' />
          <p>Job Board</p>
        </Link>
        <div className='dashboard-menu'>
          <label
            htmlFor='toggle'
            className='hamburgerMenu'
            onClick={() => props.menuClick()}
          >&#9776;</label>
        </div>
      </div>
      <div className='dashboard-navBar-links'>
        <a>
          <img src={ProfileIcon}/>
        </a>
        <a className="dash-nav"
          onClick={() => auth.logout(() => {
            props.updateRedirect()
          })}
        >Sign out</a>
      </div>
    </nav>
  );
};

export default Navigation2;