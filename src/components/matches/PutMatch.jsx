import axios from 'axios';
import React, { useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import usePut from '../hooks/usePut';

export default function PutMatch(props) {
	const { toggle, put, get, retur, fields, title } = props;
	const { data, setData, onChange } = usePut({});
	async function getData() {
		console.log('iniciando el put ');
		await axios
			.get(get + toggle)
			.then(response => {
				console.log(response.data);
				const { estadio, fecha, equipos, arbitroPrincipal } = response.data;
				const dta = {
					estadio,
					fecha,
					equipo1: equipos[0].id,
					equipo2: equipos[1].id,
					arbitroPrincipal,
				};
				setData(dta);
			})
			.catch(error => {
				console.log(error);
			});
	}
	useEffect(() => {
		getData();
	}, []);
	async function putFunction() {
		const { estadio, fecha, equipo1, equipo2, arbitroPrincipal } = data;
		const resData = {
			estadio,
			fecha,
			idEquipos: [parseInt(equipo1), parseInt(equipo2)],
			arbitroPrincipal,
		};
		await axios
			.put(put + toggle, resData)
			.then(res => {
				console.log('put hecho');
				retur();
			})
			.catch(error => console.log(error));
	}
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				background: 'rgba(0,0,0,.5)',
				position: 'absolute',
				zIndex: '100',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					background: 'white',
					borderRadius: '5px',
					padding: '30px',
					width: '500px',
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<BsX
					color='red'
					size={20}
					style={{ position: 'absolute', top: 10, right: 10 }}
					onClick={() => retur()}
				/>
				<h3>{title}</h3>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						margin: '10px 20px 30px',
					}}
				>
					{fields.map(dt => (
						<div
							key={dt.name}
							style={{
								height: '60px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<p style={{ margin: '0px' }}>{dt.labelName}</p>
							<input
								key={dt.name}
								type='text'
								name={dt.name}
								value={data !== undefined ? data[dt.name] : ''}
								onChange={e => onChange(e)}
							/>
						</div>
					))}
				</div>
				<div>
					<button onClick={() => putFunction()}>Guardar</button>
				</div>
			</div>
		</div>
	);
}
