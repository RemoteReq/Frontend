import React from 'react';
import RemoteReq from '../../assets/img/RemoteReq-logotype-cobalt.png';

const Navigation = (props) => {
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
    <nav className='landingPage-navBar'>
      <div className='landingPage-name-menu'>
        <a href="http://localhost:8080">
          <img src={ RemoteReq } className='remotereq-name' alt='remote' />
        </a>
        <div className='landingPage-menu'>
          <label
            htmlFor='toggle'
            className='hamburgerMenu'
            onClick={() => props.menuClick()}
          >&#9776;</label>
        </div>
      </div>
      <div className='landingPage-navBar-links'>
        <button className='find-talent-btn'>find talent</button>
        <button className='log-in-btn'><a href='http://localhost:8081/signin'>sign in</a></button>
      </div>
    </nav>
  );
};

export default Navigation;