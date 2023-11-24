import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import SvgIcon from '@mui/material/SvgIcon';
import { useEffect, useState } from 'react';
import { LiaPenSolid } from 'react-icons/lia';

// Mis componentes
import ResponsiveAppBar from '../nav/NavMui';
import AddTeamDialog from './AddTeamDialog';
import './Teams.css';
import PutForm from '../PutForm';

const Team = ({ id, bandera, nombre, directorTecnico, onDelete, onPut }) => (
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
						<Tooltip title='Edit' placement='right-start'>
							<LiaPenSolid color='green' size={20} onClick={() => onPut()} />
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
	const [idPut, setIdPut] = useState(0);

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
						Agregar+
					</Button>
					<AddTeamDialog open={open} handleClose={() => setOpen(false)} />
				</div>
			</section>
			<main className='App-main'>
				{idPut !== 0 ? (
					<PutForm
						title='Editar equipo'
						toggle={idPut}
						get='http://localhost:8080/api/v1/equipos/'
						put='http://localhost:8080/api/v1/equipos/actualizar/'
						retur={() => {
							setIdPut(0);
							fetchData();
						}}
						fields={[
							{
								name: 'nombre',
								labelName: 'Nombre',
							},
							{
								name: 'bandera',
								labelName: 'Bandera',
							},
							{
								name: 'directorTecnico',
								labelName: 'director tecnico',
							},
						]}
					/>
				) : null}
				<div className='container-main'>
					{equipo.map((team, index) => (
						<Team
							key={team.id}
							{...team}
							onDelete={deleteData}
							id={team.id}
							onPut={() => setIdPut(team.id)}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

export default Home;
