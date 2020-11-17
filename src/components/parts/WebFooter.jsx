import React from 'react';
import WebFooterLeft from '#assets/images/svgs/RR-web-footer-left.svg';
import WebFooterRight from '#assets/images/svgs/RR-web-footer-right.svg';

const WebFooter = ({ header, graphics, component }) => {
  return graphics

    ? <div className="webfooter">
      <div className="webfooter-graphics">
        <WebFooterLeft className="webfooter-left" width={500}/>
        <object type="image/svg+xml" data={WebFooterLeft} />

        <div className="webfooter-content">
        <h2>{header}</h2>
          <div className="webfooter-component">
            {component}
          </div>
        </div>

        <WebFooterRight className="webfooter-right" width={500}/>
        <object type="image/svg+xml" data={WebFooterRight} />
      </div>
    </div>

    : <div className="webfooter">
    <div className="webfooter-graphics">

      <div className="webfooter-content">
      <h2>{header}</h2>
        <div className="webfooter-component">
          {component}
        </div>
      </div>

    </div>
  </div>;
};

export default WebFooter;