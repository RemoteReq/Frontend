import React from 'react';
import { Link } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RemoteReq-logotype-cobalt.png';

const Navigation1 = (props) => {
  return (
    <nav className='landingPage-navBar'>
      <div className='landingPage-name-menu'>
        <Link to="/" target="_self">
        <img src={ RemoteReq } className='remotereq-name' alt=""/>
        </Link>

      </div>
        <div className='landingPage-navBar-links'>
          <Link to="/findTalent">
            <button className='button-2'>find talent</button>
          </Link>

          <Link to='/signin'>
            <button className='button-1'>find jobs</button>
          </Link>
        </div>
    </nav>
  );
};

export default Navigation1;