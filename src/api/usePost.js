import { useState } from 'react';
export const usePost = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const postAction = async reqData => {
		try {
			setLoading(true);
			const res = await fetch('/api/heat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(reqData),
			});
			const data = await res.json();
			setData(data);
			setLoading(false);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return { data, error, loading, postAction };
};
