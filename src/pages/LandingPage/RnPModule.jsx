import React from 'react';
import HealthAndMedical_Icon from '#assets/icons/pngs/Health-medical.png';
import LGBTQ_Icon from '#assets/icons/pngs/LGBTQ-rights.png';
import Environmental_Icon from '#assets/icons/pngs/Environmental.png';
import Sanitation_Icon from '#assets/icons/pngs/Water-sanitation.png';
import Race_Icon from '#assets/icons/pngs/Profile.png';
import Voting_Icon from '#assets/icons/pngs/Voting.png';
import Education_Icon from '#assets/icons/pngs/Education.png';
import Women_Icon from '#assets/icons/pngs/Womens-rights.png';

const cubelets = [
  {
    icon: HealthAndMedical_Icon,
    label: 'Health & Wellness',
  },
  {
    icon: LGBTQ_Icon,
    label: 'LGBTQIA+ Rights',
  },
  {
    icon: Environmental_Icon,
    label: 'Environmental',
  },
  {
    icon: Sanitation_Icon,
    label: 'Water &  Sanitation',
  },
  {
    icon: Race_Icon,
    label: 'Racial Justice',
  },
  {
    icon: Voting_Icon,
    label: 'Voting Rights',
  },
  {
    icon: Education_Icon,
    label: 'Educational Equity',
  },
  {
    icon: Women_Icon,
    label: "Women's Rights",
  },
];

const CubeletView = ({ icon, label }) => (
    <div className="cubelet">
        <img src={icon || 'noneya'}/>

      <p>
        {label || 'I am a cubelet!!'}
      </p>
    </div>
);

const RnPModule = () => (
    <div className="rnp-module">
      {
        cubelets.map((cubelet, key) => (
            <CubeletView icon={cubelet.icon} label={cubelet.label} key={key}/>
        ))
      }
    </div>
);

export default RnPModule;