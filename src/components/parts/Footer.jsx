import React from 'react';
import { Link } from 'react-router-dom';
import RRLogo from '#assets/images/pngs/RR-cobalt.png';
import Divider from './Divider.jsx';
import FacebookIcon from '#assets/icons/pngs/001-facebook.png';
import LinkedinIcon from '#assets/icons/pngs/010-linkedin.png';
import TwitterIcon from '#assets/icons/pngs/013-twitter.png';
import InstagramIcon from '#assets/icons/pngs/011-instagram.png';

const Footer = () => {
  return (
  <div className='footer'>
    <div className='upper-footer'>
      <ul className='footer-links'>
        <li><Link to="/about" className="small-link">About Us</Link></li>
        <li><Link to="/signup" className="small-link">Find Jobs</Link></li>
        <li><Link to="/findTalent" className="small-link">Find Talent</Link></li>
      </ul>


      <ul>
        <li><Link to="/privacyPolicy" className="small-link">Our Privacy Policy</Link></li>
        <li><Link to="termsOfUse" className="small-link">Terms of Use</Link></li>
      </ul>
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


      <div className="medias">
        <ul className='social-media-list'>
          <li><Link><img src={FacebookIcon}/></Link></li>
          <li><Link><img src={InstagramIcon}/></Link></li>
          <li><Link><img src={LinkedinIcon}/></Link></li>
        </ul>

          <input/>
          <button className='button-1'>Subscribe</button>
      </div>
    </div>
  </div>
  );
};

export default Footer;