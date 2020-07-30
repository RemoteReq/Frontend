import React from 'react';
import { Link } from 'react-router-dom';
import RRLogo from '#assets/images/pngs/RR-cobalt.png';
// import FaceBookIcon from '#assets/img/facebook.png';
// import LinkedinIcon from '#assets/img/linkedin.png';
// import TwitterIcon from '#assets/img/twitter.png';

const abouts = [
  {
    to: '/about',
    text: 'About Us',
  },
  {
    to: '/privacyPolicy',
    text: 'Our Privacy Policy',
  },
  {
    to: '/termsOfUse',
    text: 'Terms Of Use',
  },
];

const finds = [
  {
    to: '/signup',
    text: 'Find Jobs',
  },
  {
    to: '/findTalent',
    text: 'Find talent',
  },
];

const Footer = () => {
  return (
  <div className='footer'>
    {/* <ul className='footerLinks'>
      <li><Link to="/about" className="small-link">About Us</Link></li>
      <li><Link to="/signup" className="small-link">Find Jobs</Link></li>
      <li><Link to="/findTalent" className="small-link">Find Talent</Link></li>
      <li><Link to="/privacyPolicy" className="small-link">Our Privacy Policy</Link></li>
      <li><Link to="termsOfUse" className="small-link">Terms of Use</Link></li>
    </ul> */}

    <div className="footer-sections">
      <FooterSection header="Find" paths={finds} />
      <FooterSection header="About" paths={abouts}/>
    </div>

    <Link to="/">
      <img src={ RRLogo } alt='remotereq logo'/>
    </Link>
  </div>
  );
};

const FooterSection = ({ header, paths }) => {
  return (
    <div className="footer-section">
      <p>{`${header}`}</p>

      <ul>
        {
          paths.map((path, index) => {
            return (
              <li key={index}>
                <Link to={`${path.to}`} className="small-link">
                  {path.text}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

const FollowUs = () => {
  return (
    <div>
      Social Media and stuff here
    </div>
  );
};

export default Footer;