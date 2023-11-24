import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ResponsiveAppBar from '../nav/NavMui';
import './index.css';
import Button from '@mui/material/Button';
import PostForm from '../PostForm';

const Result = ({
	id,
	golVisitante,
	golLocal,
	noTarjetaRoja,
	noTarjetaAmarilla,
	partido,
}) => (
	<>
		<div className='container'>
			<div className='bandera_grande'>
				<img src={partido.equipos[0].bandera} alt='Bandera' />
			</div>
			<div className='equipo1'>
				<h3>{partido.equipos[0].nombre}</h3>
				<img src={partido.equipos[0].bandera} alt='Bandera' />
				<span>{golVisitante}</span>
			</div>
			<div className='equipo2'>
				<span>{golLocal}</span>
				<img src={partido.equipos[1].bandera} alt='Bandera' />
				<h3>{partido.equipos[1].nombre}</h3>
			</div>
			<div className='bandera_grande'>
				<img src={partido.equipos[1].bandera} alt='' />
			</div>
		</div>
	</>
);

const MatchResults = () => {
	const [resultado, setResultado] = useState([]);
	const [toggle, setToggle] = useState(false);

	const fetchData = () => {
		return axios
			.get('http://localhost:8080/api/v1/resultados/')
			.then(response => setResultado(response.data))
			.catch(console.log);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<header className='header'>
				<nav className='nav'>
					<ResponsiveAppBar />
				</nav>
			</header>
			<main>
				<section className='seccion-name'>
					<h2>Resultados</h2>
					<Button variant='text' onClick={() => setToggle(true)}>
						Add
					</Button>
				</section>
				{toggle ? (
					<PostForm
						title='Agregar resultado'
						dataProp={{
							golVisitante: '',
							golLocal: '',
							noTarjetaAmarilla: '',
							noTarjetaRoja: '',
							idPartido: '',
						}}
						toggle={toggle}
						post='http://localhost:8080/api/v1/resultados/'
						retur={() => {
							setToggle(!toggle);
							fetchData();
						}}
						fields={[
							{
								name: 'golVisitante',
								labelName: 'Goles del visitante',
							},
							{
								name: 'golLocal',
								labelName: 'Goles del local',
							},
							{
								name: 'noTarjetaAmarilla',
								labelName: 'Numero de tarjtas amarillas',
							},
							{
								name: 'noTarjetaRoja',
								labelName: 'Numero de tarjetas rojas',
							},
							{
								name: 'idPartido',
								labelName: 'Id partido',
							},
						]}
					/>
				) : null}
				<section className='seccion-result'>
					{resultado.map((resul, index) => (
						<Result key={index} {...resul} />
					))}
				</section>
			</main>
		</>
	);
};

export default MatchResults;
