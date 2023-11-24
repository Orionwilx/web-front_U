import axios from 'axios';
import React, { useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import usePut from './hooks/usePut';

export default function PutForm(props) {
	const { toggle, put, get, retur, fields, title } = props;
	const { data, setData, onChange } = usePut({});
	async function getData() {
		console.log('iniciando el put ');
		await axios
			.get(get + toggle)
			.then(response => {
				console.log(response.data);
				setData(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}
	useEffect(() => {
		getData();
	}, []);
	async function putFunction() {
		await axios
			.put(put + toggle, data)
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
