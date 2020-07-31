import React from 'react';
import { Link } from 'react-router-dom';
import RRLogo from '#assets/images/pngs/RR-cobalt.png';
import Divider from './Divider.jsx';
import SubscribeEmail from './SubscribeEmail.jsx';
import FacebookIcon from '#assets/icons/pngs/flaticon/facebook.png';
import LinkedinIcon from '#assets/icons/pngs/flaticon/linkedin.png';
import TwitterIcon from '#assets/icons/pngs/flaticon/twitter.png';
import InstagramIcon from '#assets/icons/pngs/flaticon/instagram.png';

const Footer = () => {
  return (
  <div className='footer'>
    <div className='upper-footer'>
      <ul className='footer-links'>
        <li><Link to="/signup" className="small-link">Find Jobs</Link></li>
        <li><Link to="/findTalent" className="small-link">Find Talent</Link></li>
        <li><Link to="/about" className="small-link">About Us</Link></li>
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
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/RemoteReq/"><img src={TwitterIcon}/></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RemoteReq/" ><img src={FacebookIcon}/></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/remotereqinc/"><img src={InstagramIcon}/></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/remotereq/"><img src={LinkedinIcon}/></a></li>
        </ul>

          <SubscribeEmail />
      </div>
    </div>
  </div>
  );
};

export default Footer;