import { useState } from 'react';

export default function usePost(props) {
	const [data, setData] = useState(props.data);

	const onChange = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	return {
		data,
		onChange,
	};
}
