import React from 'react';
import GABC from '#assets/images/pngs/partners/GABC.png';
import Edgility from '#assets/images/pngs/partners/Edgility.png';
import AYC from '#assets/images/pngs/partners/AYC.png';
import EGBI from '#assets/images/pngs/partners/EGBI.png';
import Do512 from '#assets/images/pngs/partners/Do512.png';
// Import Logos here
import Divider from '#parts/Divider.jsx';

const supporters = [
  {
    name: 'Greater Austic Black Chamber',
    url: 'https://www.austinbcc.org/',
    image: GABC,
  },
  {
    name: 'Edgulity Counseling',
    url: 'https://www.edgilityconsulting.com/',
    image: Edgility,
  },
  {
    name: 'Austin Young Chamber',
    url: 'https://austinyc.org/',
    image: AYC,
  },
  {
    name: 'Economic Growth Business Incubator',
    url: 'https://egbi.org/',
    image: EGBI,
  },
  {
    name: 'Do 512',
    url: 'https://do512.com/',
    image: Do512,
  },
];

const Partner = ({ partner }) => {
  return (
    <a className ="partner" href={partner.url} title={partner.name}>
      <img src={partner.image} alt={partner.name}/>
      {/* <p>{partner.name}</p> */}
    </a>
  );
};

const OurPartners = () => {
  return (
    <div className="our-partners">
      <h4>Our Partners and Supporters</h4>
      <Divider/>

      <div className="supporters">
        {
          supporters.map((partner, i) => {
            return (
              <Partner partner={partner} key={i}/>
            );
          })
        }
      </div>
      <Divider/>
    </div>
  );
};

export default OurPartners;