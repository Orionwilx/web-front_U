import axios from 'axios';
import React from 'react';
import { BsX } from 'react-icons/bs';
import usePost from './hooks/usePost';

export default function PostForm(props) {
	const { dataProp, toggle, post, retur, fields, title } = props;
	console.log(props);
	const { data, onChange } = usePost(dataProp);
	async function postFunction() {
		await axios.post(post, data).then(res => {
			console.log('registre');
			retur();
		});
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
							key={dt.id}
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
					<button onClick={() => postFunction()}>Crear</button>
				</div>
			</div>
		</div>
	);
}
