import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';

import ResponsiveAppBar from '../nav/NavMui';
import './index.css';
import PostForm from '../PostForm';
import PostMatch from './PostMatch';
import { LiaPenSolid } from 'react-icons/lia';
import PutMatch from './PutMatch';

const Matchs = ({
	id,
	estadio,
	fecha,
	equipos,
	arbitroPrincipal,
	onDelete,
	onPut,
}) => (
	<>
		<div className='matchs'>
			<img className='match-flag' src={equipos[0].bandera} alt='Equipo 1' />
			<h2 className='match-name'>{equipos[0].nombre}</h2>
			<h2 className='match-estadio'>{estadio}</h2>
			<h2 className='match-estadio'>{id}</h2>
			<h3 className='match-date'>{fecha}</h3>
			<h3 className='match-arbitro'>{arbitroPrincipal}</h3>
			<h2 className='match-name'>{equipos[1].nombre}</h2>
			<img className='match-flag' src={equipos[1].bandera} alt='Equipo 2' />
			<Box sx={{ width: 100 }}>
				<Grid container justifyContent='center'>
					<Grid item container xs={6} alignItems='flex-end' direction='column'>
						<Grid item>
							<Tooltip title='Delete' placement='right-start'>
								<Button onClick={() => onDelete(id)}>
									<DeleteIcon />
								</Button>
							</Tooltip>

							<Tooltip title='Edit' placement='right-start'>
								<LiaPenSolid color='green' size={20} onClick={() => onPut()} />
							</Tooltip>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</div>
	</>
);

const Match = () => {
	const [partido, setPartido] = useState([]);
	const [toggle, setToggle] = useState(false);
	const [idPut, setIdPut] = useState(0);

	const fetchData = () => {
		return axios
			.get('http://localhost:8080/api/v1/partidos/')
			.then(response => setPartido(response.data))
			.catch(console.log);
	};

	const deleteData = async idPartido => {
		try {
			const response = await axios.delete(
				`http://localhost:8080/api/v1/partidos/delete/${idPartido}`,
			);
			console.log(response.data);
			setPartido(partido.filter(partido => partido.id !== idPartido));
		} catch (error) {
			console.log(error);
		}
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
					<Button
						variant='text'
						style={{ color: '#ffffff' }}
						onClick={() => setToggle(true)}
					>
						Add
					</Button>
				</div>
				{toggle ? (
					<PostMatch
						title='Crear partido'
						dataProp={{
							estadio: '',
							fecha: '',
							equipo1: '',
							equipo2: '',
							arbitroPrincipal: '',
						}}
						toggle={toggle}
						post='http://localhost:8080/api/v1/partidos/'
						retur={() => {
							setToggle(!toggle);
							fetchData();
						}}
						fields={[
							{
								name: 'estadio',
								labelName: 'Estadio',
							},
							{
								name: 'fecha',
								labelName: 'Fecha',
							},
							{
								name: 'equipo1',
								labelName: 'Equipo Local',
							},
							{
								name: 'equipo2',
								labelName: 'Equipo visitante',
							},
							{
								name: 'arbitroPrincipal',
								labelName: 'Arbitro',
							},
						]}
					/>
				) : null}
				{idPut !== 0 ? (
					<PutMatch
						title='Editar partido'
						toggle={idPut}
						get='http://localhost:8080/api/v1/partidos/'
						put='http://localhost:8080/api/v1/partidos/actualizar/'
						retur={() => {
							setIdPut(0);
							fetchData();
						}}
						fields={[
							{
								name: 'estadio',
								labelName: 'Estadio',
							},
							{
								name: 'fecha',
								labelName: 'Fecha',
							},
							{
								name: 'equipo1',
								labelName: 'Equipo Local',
							},
							{
								name: 'equipo2',
								labelName: 'Equipo visitante',
							},
							{
								name: 'arbitroPrincipal',
								labelName: 'Arbitro',
							},
						]}
					/>
				) : null}
				<div className='name-matchs_list'>
					<ul>
						<li>Equipo 1</li>
						<li>Estadio</li>
						<li>Id</li>
						<li>Fecha</li>
						<li>Arbitro</li>
						<li>Equipo 2</li>
					</ul>
				</div>
				<div className='matchs-container'>
					{partido.map((match, index) => (
						<Matchs
							key={index}
							{...match}
							onDelete={deleteData}
							onPut={() => setIdPut(match.id)}
						/>
					))}
				</div>
			</main>
		</>
	);
};

export default Match;
