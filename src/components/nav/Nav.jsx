import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar-list'>
				<li className='navbar-item'>
					<Link to='/'>Inicio</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/result'>Equipos</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/match'>Partidos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
