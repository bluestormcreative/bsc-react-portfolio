import React from 'react';

const curYear = new Date().getFullYear();

const Footer = () => (
  <footer className="site-footer border-t-2 border-solid border-gray-400 py-5 mt-4">
    <div className="copy text-xs">BSC &copy; {curYear}</div>
  </footer>
);

export default Footer;
