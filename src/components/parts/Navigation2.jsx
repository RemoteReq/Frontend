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

  componentDidMount() {
    const Nav = document.getElementById('navigation-1');
    Nav.classList.remove('show');
    Nav.classList.add('hide');
  }

  componentWillUnmount() {
    const Nav = document.getElementById('navigation-1');
    Nav.classList.remove('hide');
    Nav.classList.add('show');
  }

  signOut(e) {
    e.preventDefault();

    auth.logout(() => {
      this.props.history.push('/sign-in');
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
      <nav
      id="dashboard-navBar"
      className='dashboard-navBar'>
        <Link to="/dashboard" className="dashboard-home">
          <img src={ RemoteReq } className='remotereq-name' alt=""/>
          <p>Job Board</p>
        </Link>

        <div className="dashboard-links">
          <a className="large-link"
            onClick={(e) => { this.signOut(e); }}
          >Sign out</a>
        </div>

        <div className={`dashboard-hamburger-menu ${showHamburgerMenu ? 'show' : 'hide'}`}>
          <Link to="/settings/profile">
            <button className='button-1'>Settings</button>
          </Link>

          <a>
            <button className="button-1"
              onClick={(e) => { this.signOut(e); }}
            >Sign out</button>
          </a>
        </div>

        <div
          className="dashboard-hamburger-menu-icon"
          onClick={(e) => { this.toggleHamburgerMenu(e); }}
        >
          <p className={`${showHamburgerMenu ? 'hide' : 'show'}`}>=</p>
          <p className={`${showHamburgerMenu ? 'show' : 'hide'}`}>x</p>
        </div>

    </nav>
    );
  }
}

export default withRouter(Navigation2);