import React from 'react';

// Components.
import CategoryFilter from '../CategoryFilter';
import Project from '../Project';

const Portfolio = () => {
  const projects = [
    { 'name': 'alpha' },
    { 'name': 'beta' },
    { 'name': 'zed' },
  ];

  return (
    <section className="portfolio">
      <CategoryFilter />
      {projects && projects.map((project) => (
        <Project name={project.name} />
      ))}
    </section>
  );
};

export default Portfolio;
