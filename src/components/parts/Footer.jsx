import React from 'react';
import RRLogo from '../../../assets/img/RR-cobalt.png';
// import FaceBookIcon from '#assets/img/facebook.png';
// import LinkedinIcon from '#assets/img/linkedin.png';
// import TwitterIcon from '#assets/img/twitter.png';

const Footer = () => (
  <div className='footer'>
    <ul className='footerLinks'>
      <li><a href='#'></a>Our Story</li>
      <li><a href='#'></a>Find Jobs</li>
      <li><a href='#'></a>Find Talent</li>
    </ul>
    <a href="http://localhost:8080">
      <img src={ RRLogo } alt='remotereq logo'/>
    </a>
  </div>
);

export default Footer;