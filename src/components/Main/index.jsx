import React from 'react';

// Components.
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

const Main = ({ selectedNavItem }) => (
  <div className="site-main flex-grow">
    {selectedNavItem === 'About' && (
      <About />
    )}
    {selectedNavItem === 'Portfolio' && (
      <Portfolio />
    )}
    {selectedNavItem === 'Resume' && (
      <Resume />
    )}
  </div>
);

export default Main;
