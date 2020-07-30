import React from 'react';
import { Link } from 'react-router-dom';
import RRLogo from '#assets/images/pngs/RR-cobalt.png';
import Divider from './Divider.jsx';
// import FaceBookIcon from '#assets/img/facebook.png';
// import LinkedinIcon from '#assets/img/linkedin.png';
// import TwitterIcon from '#assets/img/twitter.png';

const Footer = () => {
  return (
  <div className='footer'>
    <div className='upper-footer'>
      <ul className='footer-links'>
        <li><Link to="/about" className="small-link">About Us</Link></li>
        <li><Link to="/signup" className="small-link">Find Jobs</Link></li>
        <li><Link to="/findTalent" className="small-link">Find Talent</Link></li>
      </ul>

      <div className="medias">
        <ul className='social-media-list'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>

          <input/>
      </div>
    </div>

    <Divider />

    <div className='lower-footer'>
      <span className="the-r">
        <Link to="/">
          <img src={ RRLogo } alt='remotereq logo'/>
        </Link>

        <p>
          Slogan || copyright
        </p>
      </span>


      <ul>
        <li><Link to="/privacyPolicy" className="small-link">Our Privacy Policy</Link></li>
        <li><Link to="termsOfUse" className="small-link">Terms of Use</Link></li>
      </ul>
    </div>
  </div>
  );
};

export default Footer;