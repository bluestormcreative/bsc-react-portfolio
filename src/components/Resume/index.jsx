import React from 'react';
import resumePDF from '../../assets/MacMillan-CV-2021.pdf';

// Components.
import Button from '../Button';

const Resume = () => (
  <section className="resume">
    <h2 className="resume__heading text-2xl mb-4">Experience</h2>
    <p className="resume__description py-4">I've been crafting digital experiences online since 2006. I've worked with several top web agencies and am currently with <a href="https://alley.co" target="blank">Alley.</a></p>
    
    <Button
      isLink={true}
      target={false}
      text="Download my CV (PDF)"
      link={resumePDF}
    />
    <Button
      isLink={true}
      target={true}
      text="Check out my GitHub"
      link="https://github.com/bluestormcreative"
    />
    <Button
      isLink={true}
      target={true}
      text="View my profile on LinkedIn"
      link="https://www.linkedin.com/in/shannon-macmillan-18439b2a"
    />
  </section>
);

export default Resume;
