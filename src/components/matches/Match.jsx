import React from 'react';
import ResponsiveAppBar from '../navmui';
import './index.css';

const Match = () => {
	const results = [
		{ flagUrl: 'https://flagcdn.com/lr.svg', team: 'USA', score: 2 },
		{ flagUrl: 'https://flagcdn.com/co.svg', team: 'COLOMBIA', score: 1 },
		{ flagUrl: 'https://flagcdn.com/co.svg', team: 'COLOMBIA', score: 1 },
		{ flagUrl: 'https://flagcdn.com/co.svg', team: 'COLOMBIA', score: 1 },
		{ flagUrl: 'https://flagcdn.com/co.svg', team: 'COLOMBIA', score: 1 },
		{ flagUrl: 'https://flagcdn.com/co.svg', team: 'COLOMBIA', score: 1 },
		{ flagUrl: 'https://flagcdn.com/co.svg', team: 'COLOMBIA', score: 1 },
		{ flagUrl: 'https://flagcdn.com/co.svg', team: 'COLOMBIA', score: 1 },
	];

	return (
		<>
			<header>
				<ResponsiveAppBar />
			</header>
			<div className='scoreboard'>
				<div className='team-container'>
					<img src={results.flagUrl} />
					<h2 className='team-name'>{} VEN</h2>
					<h2 className='team-score'>2 - 0</h2>
				</div>
				<div className='team-container'>
					<h2 className='team-name'>PER ECU</h2>
					<h2 className='team-score'>0 - 0</h2>
				</div>
			</div>
		</>
	);
};

export default Match;
