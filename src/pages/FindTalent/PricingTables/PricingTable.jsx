import React, { useRef } from 'react';
import Hands from '#assets/images/pngs/hands.png';
import PostFor from '#assets/images/pngs/post-for.png';
import PT from '#assets/images/pngs/part-time.png';
import FT from '#assets/images/pngs/full-time.png';

const PricingTable = ({ jobType, jobPrices, togglePrices }) => {
  console.log(jobType, jobPrices);

  return (
    <div>

      <div className="price-header">
        <div>
          <img className="hands" src={Hands}/>
        </div>

        <div>
            {jobType === 'Part Time'
              ? <img className="job-type" src={PT}/>
              : <img className="job-type" src={FT}/>
            }
        </div>
      </div>

      <div className="price-grid">
        <div className="column zero">
          <div>

          </div>
          <div>
            <img className="post-for" src={PostFor}/>
          </div>
          <div>
            <p className="small-paragraph">Access up to 5 candidate matches</p>
          </div>
          <div>
            <p className="small-paragraph">Placement Fee <br/>(per hire)</p>
          </div>
          <div>
            <p className="s">Total</p>
          </div>
        </div>

        <div className="column one">
          <div><h3>{jobPrices[0].availability}</h3></div>
          <div><p className="s">FREE</p></div>
          <div><p>$ {jobPrices[0].accessPrice}</p></div>
          <div><p>$ {jobPrices[0].hirePrice}</p></div>
          <div><p className="s">$ {jobPrices[0].accessPrice + jobPrices[0].hirePrice}</p></div>
        </div>

        <div className="column two">
          <div><h3>{jobPrices[1].availability}</h3></div>
          <div><p className="s">FREE</p></div>
          <div><p>$ {jobPrices[1].accessPrice}</p></div>
          <div><p>$ {jobPrices[1].hirePrice}</p></div>
          <div><p className="s">$ {jobPrices[1].accessPrice + jobPrices[1].hirePrice}</p></div>
        </div>

        <div className="column three">
          <div className="s"><h3>{jobPrices[2].availability}</h3></div>
          <div><p className="s">FREE</p></div>
          <div><p>$ {jobPrices[2].accessPrice}</p></div>
          <div><p>$ {jobPrices[2].hirePrice}</p></div>
          <div><p className="s">$ {jobPrices[2].accessPrice + jobPrices[2].hirePrice}</p></div>
        </div>

      </div>

      <div className="price-footer">
        <div></div>

        <div className="price-toggle">
            <p className={`${jobType === 'Full Time' ? 'highlight' : 'dim'}`}>Full Time</p>

          <label className="switch">
            <input
              type="checkbox"
              onClick={() => { return togglePrices(); }}
              />
            <span className="slider"></span>
          </label>

          <p className={`${jobType === 'Part Time' ? 'highlight' : 'dim'}`}
             id="price-head" ref={useRef(null)}
          >Part Time</p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;