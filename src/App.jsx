import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './components/teams/Teams';
import Match from './components/matches/Match';
import MatchResults from './components/matchesResults/MatchesResult';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/result' element={<MatchResults />} />
				<Route path='/match' element={<Match />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
