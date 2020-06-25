import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/parts/Section.jsx';
import MiddleSection from '../../components/parts/MiddleSection.jsx';
import ReverseSection from '../../components/parts/ReverseSection.jsx';

const AboutMain = () => (
  <div className='about-main'>
    <h3 className='eyebrow'>What makes us different?</h3>

    <Section 
      header={'Meet your personal recruiter'}
      p={"No more lost hours scouring jobs boards. No more lengthy applications. Simply create a profile, and let us do the work for you."}
      link={"Get started"}
      to={"/signup"}
    />

    <MiddleSection
      header={"Remote + Purposeful"}
      p={"No more watching from the sidelines. Do impactful work from anywhere."}
    />

    <div className='about remote-purposeful'>
      {/* <h1>Remote + Purposeful</h1>
      <p>No more watching from the sidelines. Do impactful work from anywhere.</p> */}
      <ul>
        <li>Health &amp; Wellness</li>
        <li>LGBTQIA+ Rights</li>
        <li>Climate Change</li>
        <li>Water &amp; Sanitation</li>
        <li>Racial Justice</li>
        <li>Voting Rights</li>
        <li>Educational Equity</li>
        <li>Women's Rights</li>
      </ul>
    </div>

    <ReverseSection
      header={"Quick hiring process"}
      p={"Everyone wins with quicker response times and faster hiring processes."}
      link={"Find a job"}
      to={"/signup"}
    />

  </div>
);

export default AboutMain;