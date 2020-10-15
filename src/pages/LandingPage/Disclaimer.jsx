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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium dictum nisl, et sollicitudin nulla efficitur quis. Donec luctus quis ipsum eu pharetra. Nullam gravida lacus nec arcu iaculis, fringilla suscipit turpis egestas. In pellentesque hendrerit orci, sed feugiat erat vulputate eget. Morbi ultricies volutpat massa et rutrum. Suspendisse tempor elementum mi, sit amet hendrerit tellus tempor non. In hac habitasse platea dictumst. Nunc pellentesque dolor ut mollis varius. Nullam iaculis aliquet metus, tincidunt ultrices felis maximus venenatis.
            </p>
          </div>

          <div className="accept">
            <label>I accept</label>
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