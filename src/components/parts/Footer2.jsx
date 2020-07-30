import React from 'react';
import { Link } from 'react-router-dom';
import RRLogo from '#assets/images/pngs/RR-cobalt.png';
// import FaceBookIcon from '#assets/img/facebook.png';
// import LinkedinIcon from '#assets/img/linkedin.png';
// import TwitterIcon from '#assets/img/twitter.png';

const Footer = () => {
  return (
  <div className='footer'>
    <ul className='footerLinks'>
      <li><Link to="/about" className="small-link">About Us</Link></li>
      <li><Link to="/signup" className="small-link">Find Jobs</Link></li>
      <li><Link to="/findTalent" className="small-link">Find Talent</Link></li>
      <li><Link to="/privacyPolicy" className="small-link">Our Privacy Policy</Link></li>
      <li><Link to="termsOfUse" className="small-link">Terms of Use</Link></li>
    </ul>

    <Link to="/">
      <img src={ RRLogo } alt='remotereq logo'/>
    </Link>
  </div>
  );
};

export default Footer;