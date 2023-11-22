import React from 'react';
import ResponsiveAppBar from '../nav/NavMui';
import './index.css';

const MatchResults = () => {
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
			<header className='header'>
				<nav className='nav'>
					<ResponsiveAppBar />
				</nav>
			</header>

			<div className='match-results'>
				{results.map((result, index) => (
					<div key={index} className='match-result'>
						<img src={result.flagUrl} alt={result.team} />
						<div className='team-info'>
							<h3>{result.team}</h3>
							<h4>{result.score}</h4>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default MatchResults;
