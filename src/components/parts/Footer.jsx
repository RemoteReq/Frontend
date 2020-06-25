import React from 'react';
import { Link } from 'react-router-dom';
import RRLogo from '../../../assets/img/RR-cobalt.png';
// import FaceBookIcon from '#assets/img/facebook.png';
// import LinkedinIcon from '#assets/img/linkedin.png';
// import TwitterIcon from '#assets/img/twitter.png';

const Footer = () => (
  <div className='footer'>
    <ul className='footerLinks'>
      <li><Link to="/mission" className="small-link">Our Mission</Link></li>
      <li><Link to="/signup" className="small-link">Find Jobs</Link></li>
      <li><Link to="/findTalent" className="small-link">Find Talent</Link></li>
    </ul>

    <Link to="/">
      <img src={ RRLogo } alt='remotereq logo'/>
    </Link>
  </div>
);

export default Footer;