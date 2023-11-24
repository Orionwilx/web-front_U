import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const EditTeamDialog = ({ open, handleClose }) => {
	const [nombre, setNombre] = useState('');
	const [directorTecnico, setDirectorTecnico] = useState('');
	const [bandera, setBandera] = useState('');

	const handleSubmit = async idPartido => {
		const equipo = { nombre, directorTecnico, bandera };

		try {
			const response = await axios.put(
				`http://localhost:8080/api/v1/partidos/actualizar/${idPartido}`,
				equipo,
			);
			console.log(response.data);
			handleClose();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Editar Equipo</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Escriba la informacion del nuevo equipos
				</DialogContentText>
				<Box
					component='form'
					onSubmit={handleSubmit}
					noValidate
					autoComplete='off'
				>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Nombre'
						type='text'
						fullWidth
						value={nombre}
						onChange={e => setNombre(e.target.value)}
					/>
					<TextField
						margin='dense'
						id='directorTecnico'
						label='Director Tecnico'
						type='text'
						fullWidth
						value={directorTecnico}
						onChange={e => setDirectorTecnico(e.target.value)}
					/>
					<TextField
						margin='dense'
						id='bandera'
						label='Bandera'
						type='text'
						fullWidth
						value={bandera}
						onChange={e => setBandera(e.target.value)}
					/>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Cancel
				</Button>
				<Button type='submit' onClick={handleSubmit} color='primary'>
					Add
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default EditTeamDialog;
