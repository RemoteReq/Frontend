import React from 'react';
import { Link } from 'react-router-dom';
import RRLogo from '../../../assets/img/RR-cobalt.png';
// import FaceBookIcon from '#assets/img/facebook.png';
// import LinkedinIcon from '#assets/img/linkedin.png';
// import TwitterIcon from '#assets/img/twitter.png';

const Footer = () => (
  <div className='footer'>
    <ul className='footerLinks'>
      <li><Link to="/mission">Our Mission</Link></li>
      <li><Link to="/signup">Find Jobs</Link></li>
      <li><Link to="/findTalent">Find Talent</Link></li>
    </ul>
    <a href="http://localhost:8080">
      <img src={ RRLogo } alt='remotereq logo'/>
    </a>
  </div>
);

export default Footer;