import React from 'react';

const Nav = () => (
	<nav className="site-nav border-b-2 border-solid border-gray-400 py-4 flex space-x-4">
		<a className="nav-item inline-block" href="#about">About</a>
		<span className="nav-item inline-block">Portfolio</span>
		<span className="nav-item inline-block">Resume</span>
		<span className="nav-item inline-block">Contact</span>
	</nav>
);

export default Nav;
