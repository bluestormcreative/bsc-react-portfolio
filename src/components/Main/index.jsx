import React from 'react';

// Components.
import About from '../About';
import Portfolio from '../Portfolio';

const Main = ({ selectedNavItem }) => (
  <div className="site-main">
    {selectedNavItem === 'About' && (
      <About />
    )}
    {selectedNavItem === 'Portfolio' && (
      <Portfolio />
    )}
  </div>
);

export default Main;
