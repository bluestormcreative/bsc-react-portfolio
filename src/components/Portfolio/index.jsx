import React, { useState } from 'react';

// Components.
import CategoryFilter from '../CategoryFilter';
import Project from '../Project';

const Portfolio = () => {
  const [selectedCat, setSelectedCat] = useState('Media');

  const [projects] = useState([
    {
      'name': 'Toby Vera Bercovici',
      'cat': ['Artists'],
      'desc': 'Website for director and educator Toby Vera Bercovici.',
      'image': 'toby.png',
      'link': 'https://tobyverabercovici.com/',
    },
    {
      'name': 'Giant Artists',
      'cat': ['Artists', 'Media'],
      'desc': 'Online hub for Giant Artists talent agency, media contact, and products.',
      'image': 'giantartists.jpeg',
      'link': 'https://giantartists.com/',
    },
    {
      'name': 'Colorado Public Radio',
      'cat': ['Nonprofits', 'Media'],
      'desc': 'React-driven web and native app for CPR news and streaming.',
      'image': 'cpr.jpg',
      'link': 'https://www.cpr.org/',
    },
    {
      'name': 'NBC',
      'cat': ['Media'],
      'desc': 'Web and mobile presence for over 70+ NBC local television stations and national news.',
      'image': 'nbc-mobile.jpg',
      'link': 'https://www.nbcnewyork.com/',
    },
    {
      'name': 'POCIS',
      'cat': ['Nonprofits'],
      'desc': 'Web app and membership hub for People of Color in Independent Schools, Northern California',
      'image': 'nocapocis.png',
      'link': 'https://www.nocapocis.org/',
    },
    {
      'name': 'New York Post',
      'cat': ['Media'],
      'desc': 'Development team for curation and membership tools for News Corp/The New York Post.',
      'image': 'nyp-member-dash.png',
      'link': 'https://www.nbcnewyork.com/',
    },
  ]);

  const displayProjects = projects.filter((project) => project.cat.includes(selectedCat));

  return (
    <section className="portfolio">
      <CategoryFilter
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <h1 className="portfolio__heading text-3xl mb-4 border-b-2">{selectedCat}</h1>
      <div className="portfolio__projects grid grid-cols-2 gap-8">
        {displayProjects && displayProjects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
