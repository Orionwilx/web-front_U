import { useState } from 'react';

export default function usePut(props) {
	const [data, setData] = useState(props.data);

	const onChange = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	return {
		data,
		setData,
		onChange,
	};
}
