import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      // <div className="video">
      <div className="sticky-video">
        <iframe width="512" height="300" src="https://www.youtube.com/embed/yWIqlg2yiUI?rel=0&autoplay=1&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default Video;