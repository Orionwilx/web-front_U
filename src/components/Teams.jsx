import React from 'react';
import ResponsiveAppBar from './navmui';
import './Teams.css';

const Team = ({ image, name, dicT }) => (
	<div className='team'>
		<img className='logo' src={image} alt={name} />
		<h2 className='name'> {name}</h2>
		<p className='score'>{dicT}</p>
	</div>
);

const Home = () => {
	const teams = [
		{ image: 'https://flagcdn.com/lr.svg', name: 'USA', dicT: 'Newman' },
		{
			image: 'https://flagcdn.com/co.svg',
			name: 'COLOMBIA',
			dicT: 'perekerman',
		},
		{
			image: 'https://flagcdn.com/co.svg',
			name: 'COLOMBIA',
			dicT: 'perekerman',
		},
		{
			image: 'https://flagcdn.com/co.svg',
			name: 'COLOMBIA',
			dicT: 'perekerman',
		},
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
			<main className='App-main'>
				<div className='container-main'>
					{teams.map((team, index) => (
						<Team key={index} {...team} />
					))}
				</div>
			</main>
		</div>
	);
};

export default Home;
