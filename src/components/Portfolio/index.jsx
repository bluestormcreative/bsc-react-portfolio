import React, { useState } from 'react';

// Components.
import CategoryFilter from '../CategoryFilter';
import Project from '../Project';

const Portfolio = () => {
  const [selectedCat, setSelectedCat] = useState('Artists');

  const projects = [
    { 'name': 'alpha', 'cat': ['Artists'] },
    { 'name': 'beta', 'cat': ['Artists', 'Media'] },
    { 'name': 'zed', 'cat': ['Nonprofits', 'Media'] },
  ];

  return (
    <section className="portfolio">
      <CategoryFilter
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      {projects && projects.map((project) => (
        <Project project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
