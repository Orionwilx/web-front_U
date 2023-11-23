import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../nav/NavMui';
import axios from 'axios';
import './index.css';

const Matchs = ({ id, estadio, fecha, equipos, arbitroPrincipal }) => (
	<>
		<div className='matchs'>
			<img className='match-flag' src={equipos[0].bandera} alt='Equipo 1' />
			<h2 className='match-name'>{equipos[0].nombre}</h2>
			<h2 className='match-estadio'>{estadio}</h2>
			<h3 className='match-date'>{fecha}</h3>
			<h3 className='match-arbitro'>{arbitroPrincipal}</h3>
			<h2 className='match-name'>{equipos[1].nombre}</h2>
			<img className='match-flag' src={equipos[1].bandera} alt='Equipo 2' />
		</div>
	</>
);

const Match = () => {
	const [partido, setPartido] = useState([]);

	const fetchData = () => {
		return axios
			.get('http://localhost:8080/api/v1/partidos/')
			.then(response => setPartido(response.data))
			.catch(console.log);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<header>
				<ResponsiveAppBar />
			</header>
			<main>
				<div className='name-matchs'>
					<h2>Lista de partidos</h2>
					<ul>
						<li>Equipo 1</li>
						<li>Estadio</li>
						<li>Fecha</li>
						<li>Arbitro</li>
						<li>Equipo 2</li>
					</ul>
				</div>
				<div className='matchs-container'>
					{partido.map((match, index) => (
						<Matchs key={index} {...match} />
					))}
				</div>
			</main>
		</>
	);
};

export default Match;
