import React from 'react';
import ResponsiveAppBar from './navmui';
import './Teams.css';

const Team = ({ image, name, score }) => (
	<div className='team'>
		<img className='logo' src={image} alt={name} />
		<h2 className='name'> {name}</h2>
		<p className='score'>{score}</p>
	</div>
);

const Home = () => {
	const teams = [
		{ image: 'https://flagcdn.com/lr.svg', name: 'USA', dicT: 2 },
		{ image: 'https://flagcdn.com/co.svg', name: 'COLOMBIA', dicT: 1 },
		{ image: 'https://flagcdn.com/co.svg', name: 'COLOMBIA', dicT: 1 },
		{ image: 'https://flagcdn.com/co.svg', name: 'COLOMBIA', dicT: 1 },
		// ...otros equipos
	];

	return (
		<div className='App'>
			<header>
				<ResponsiveAppBar />
			</header>
			<section className='App-header'>
				<h1>Equipos</h1>
			</section>
			<main>
				{teams.map((team, index) => (
					<Team key={index} {...team} />
				))}
			</main>
		</div>
	);
};

export default Home;
