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

  const displayProjects = projects.filter((project) => project.cat.includes(selectedCat));

  return (
    <section className="portfolio">
      <CategoryFilter
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <h1 className="portfolio__heading text-2xl">{selectedCat}</h1>
      {displayProjects && displayProjects.map((project) => (
        <Project project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
