import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

import { useEffect, useState } from 'react';

// Mis componentes
import ResponsiveAppBar from '../nav/NavMui';
import AddTeamDialog from './AddTeamDialog';

import './Teams.css';

const Team = ({ id, bandera, nombre, directorTecnico, onDelete }) => (
	<div className='team'>
		<img className='logo' src={bandera} alt={nombre} />
		<h2 className='name'> {nombre}</h2>
		<p className='score'>{directorTecnico}</p>
		<Box sx={{ width: 100 }}>
			<Grid container justifyContent='center'>
				<Grid item container xs={6} alignItems='flex-end' direction='column'>
					<Grid item>
						<Tooltip title='Delete' placement='right-start'>
							<Button onClick={() => onDelete(id)}>
								<DeleteIcon />
							</Button>
						</Tooltip>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	</div>
);

const Home = () => {
	const [equipo, setEquipo] = useState([]);
	const [open, setOpen] = useState(false);

	const fetchData = () => {
		return axios
			.get('http://localhost:8080/api/v1/equipos')
			.then(response => setEquipo(response.data))
			.catch(console.log);
	};

	const deleteData = async idEquipo => {
		try {
			const response = await axios.delete(
				`http://localhost:8080/api/v1/equipos/deleteById/${idEquipo}`,
			);
			console.log(response.data);
			setEquipo(equipo.filter(equipo => equipo.id !== idEquipo));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='App'>
			<header>
				<ResponsiveAppBar />
			</header>
			<section className='App-header'>
				<h1 className='h1'>Equipos</h1>
				<div className='header-button'>
					<Button
						variant='text'
						onClick={() => setOpen(true)}
						style={{ color: '#ffffff' }}
					>
						Add
					</Button>
					<AddTeamDialog open={open} handleClose={() => setOpen(false)} />
				</div>
			</section>
			<main className='App-main'>
				<div className='container-main'>
					{equipo.map((team, index) => (
						<Team key={team.id} {...team} onDelete={deleteData} />
					))}
				</div>
			</main>
		</div>
	);
};

export default Home;
