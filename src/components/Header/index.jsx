import React from 'react';

// Components.
import Nav from '../Nav';
import Logo from '../Logo';

const Header = () => (
	<header className="site-header py-5">
		<Logo />
		<Nav />
	</header>
);

export default Header;
