import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const Bar = () => {
	return (
		<>
			<div className='container'>
				<Navbar className='bg-body-tertiary'>
					<Container>
						<Navbar.Brand href='#home'>Brand link</Navbar.Brand>
					</Container>
				</Navbar>
				<br />
				<Navbar className='bg-body-tertiary'>
					<Container>
						<Navbar.Brand>Brand text</Navbar.Brand>
					</Container>
				</Navbar>
			</div>
		</>
	);
};

export default Bar;
