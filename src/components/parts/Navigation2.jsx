import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RR-cobalt.png';
import auth from '../Auth/Auth.jsx';

class Navigation2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHamburgerMenu: false,
    };

    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signOut(e) {
    e.preventDefault();

    auth.logout(() => {
      this.props.history.push('/signin');
    });
  }

  toggleHamburgerMenu(e) {
    e.preventDefault();

    const { showHamburgerMenu } = this.state;

    if (showHamburgerMenu) {
      this.setState({
        showHamburgerMenu: false,
      });
    } else {
      this.setState({
        showHamburgerMenu: true,
      });
    }
  }

  render() {
    const { showHamburgerMenu } = this.state;

    return (
      <nav className='dashboard-navBar'>
        <Link to="/dashboard" className="dashboard-home">
          <img src={ RemoteReq } className='remotereq-name' alt=""/>
          <p>Job Board</p>
        </Link>

        <div className="dashboard-links">
          <a className="large-link"
            onClick={(e) => { this.signOut(e); }}
          >Sign out</a>
        </div>

        <div className={`hamburger-menu ${showHamburgerMenu ? 'show' : 'hide'}`}>
          <Link to="/settings/profile">
            <button className='button-1'>Settings</button>
          </Link>

          <button className="button-1"
            onClick={(e) => { this.signOut(e); }}
          >Sign out</button>
        </div>

        <div
          className="hamburger-menu-icon"
          onClick={(e) => { this.toggleHamburgerMenu(e); }}
        >
          <p className={`${showHamburgerMenu ? 'hide' : 'show'}`}>=</p>
          <p className={`${showHamburgerMenu ? 'show' : 'hide'}`}>x</p>
        </div>

    </nav>
    );
  }
}

// const Navigation3 = (props) => {
//   const history = useHistory();

//   return (
//     <nav className='dashboard-navBar'>
//       <Link className='dashboard-home stealth-link' to="/dashboard">
//         <img src={ RemoteReq } className='remotereq-name' alt='remote' />
//         <p>Job Board</p>
//       </Link>

//       <div className='dashboard-links'>

//         <a className="large-link"
//           onClick={() => {
//             return auth.logout(() => {
//               history.push('/signin');
//             });
//           }}
//         >Sign out</a>
//       </div>
//     </nav>
//   );
// };

export default withRouter(Navigation2);