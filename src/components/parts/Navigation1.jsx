import React from 'react';
import { Link } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RemoteReq-logotype-cobalt.png';

const Navigation1 = (props) => {
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
        <Link to="/" target="_self">
        <img src={ RemoteReq } className='remotereq-name' alt=""/>
        </Link>
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
          <Link to="/findTalent">
            <button className='button-2'>find talent</button>
          </Link>

          <Link to='/signin'>
            <button className='button-1'>find jobs</button>
          </Link>
        </div>
      ) : null}

    </nav>
  );
};

export default Navigation1;