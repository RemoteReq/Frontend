import React from 'react';
import RemoteReq from '../../../assets/img/RemoteReq-logotype-cobalt.png';

const Navigation = (props) => {
  let menuVisible;

  const width = window.innerWidth;

  if (width < 768) {
    if (props.LandingPageMenuVisible === true) {
      menuVisible = true;
    } else {
      menuVisible = false;
    }
  } else {
    menuVisible = true;
  }


  return (
    <nav className='landingPage-navBar'>
      <div className='landingPage-name-menu'>
        <img src={ RemoteReq } className='remotereq-name' alt=""/>
        { width < 768 ? (
        <div className='hamburgerMenu' onClick={() => props.menuClick()}>
          <div className='line top-line'></div>
          <div className='line mid-line'></div>
          <div className='line bottom-line'></div>
        </div>
        ) : null}
      </div>
      { menuVisible === true ? (
        <div className='landingPage-navBar-links'>
          <button className='find-talent-btn'>find talent</button>
          <button className='log-in-btn'><a href='/signin'>sign in</a></button>
        </div>
      ) : null}

    </nav>
  );
};

export default Navigation;