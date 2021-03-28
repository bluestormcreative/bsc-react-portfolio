import React from 'react';

const Nav = ({ selectedNavItem, setSelectedNavItem }) => {
	const handleNavClick = (event) => {
		const navItem = event.target.textContent;
		setSelectedNavItem(navItem);
	};

	return (
		<nav className="site-nav border-b-2 border-solid border-gray-400 py-4 flex space-x-4">
			<a
				className={`nav-item inline-block ${selectedNavItem === 'About' ? 'nav-active' : ''}`}
				data-testid="about"
				href="#about"
				onClick={handleNavClick}
			>
				About
			</a>
			<span
				className={`nav-item inline-block ${selectedNavItem === 'Portfolio' ? 'nav-active' : ''}`}
				data-testid="portfolio"
				onClick={handleNavClick}
			>
				Portfolio
			</span>
			<span
				className={`nav-item inline-block ${selectedNavItem === 'Resume' ? 'nav-active' : ''}`}
				onClick={handleNavClick}
			>
				Resume
			</span>
			<span
				className={`nav-item inline-block ${selectedNavItem === 'Contact' ? 'nav-active' : ''}`}
				onClick={handleNavClick}
			>
				Contact
			</span>
		</nav>
	);
};

export default Nav;
