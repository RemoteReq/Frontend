import React, { Component } from 'react';

class Disclaimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStatus: true,
    };

    this.acceptModal = this.acceptModal.bind(this);
  }

  componentDidMount() {
    localStorage.setItem('showModal', true);

    // Prevent scrolling while Disclaimer is mounted
    document.body.style.overflow = 'hidden';
  }

  acceptModal() {
    localStorage.setItem('showModal', false);

    this.setState({
      showStatus: false,
    }, () => {
      document.body.style.overflow = 'unset';
    });
  }

  render() {
    const { showStatus } = this.state;

    return (
      <div className={`disclaimer ${showStatus ? 'show' : 'hide'}`}>
        <div className="modal">
          <h3>Disclaimer</h3>

          <div className="disclaimer-box">
            <p>
              Thanks for visiting <a>RemoteReq.com</a>.
              We are still in BETA mode.
              For the next few weeks, we are putting the finishing touches on our platform,
              so please give us some grace if you encounter anything out of the ordinary.
              In fact, we could use your help.
              If anything seems off, please email us at <a>kbryant@remotereq.com</a> to share your feedback.

              <br/>
              <br/>

              <p>
                Check the box below, if you understand what it means to be imperfect, but still working on yourself.
              </p>
            </p>
          </div>

          <div className="accept">
            <label>I Understand</label>
            <input
              onClick={this.acceptModal}
              type="checkbox"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Disclaimer;