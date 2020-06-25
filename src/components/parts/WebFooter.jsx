import React from 'react';
import WebFooterLeft from '#assets/images/svgs/RR-web-footer-left.svg';
import WebFooterRight from '#assets/images/svgs/RR-web-footer-right.svg';

const WebFooter = ({ header, buttonGroup }) => {
  return (
    <div className="webfooter">
      <div className="webfooter-graphics">
        <WebFooterLeft className="webfooter-left" width={500}/>

        <div className="webfooter-content">
        <h2>{header}</h2>
          <div className="webfooter-buttonGroup">
            {buttonGroup}
          </div>
        </div>

        <WebFooterRight className="webfooter-right" width={500}/>
      </div>
    </div>
  )
}

export default WebFooter;