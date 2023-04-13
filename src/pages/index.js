/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

export default function Home() {
	const [results, setResult] = useState([]);
	const [loading, setLoading] = useState(false);

	const postHeat = async () => {
		// setLoading(true)
		// const res = await fetch("/api/heat")
		// const data = await res.json()
		// setResult(data.result)
		// setLoading(false)
	};

	return (
		<div className='container'>
			<h1 className='text-2xl font-bold underline'>Hello world!</h1>
			<button onClick={postHeat} className='btn-start'>
				Start
			</button>
			{loading && (
				<p style={{ padding: '20px 0', fontSize: '17px' }}>Loading.....</p>
			)}
			{results &&
				results.map((item, index) => {
					return (
						<div key={index.toString()} style={{ marginTop: '20px' }}>
							<p>{item.title}</p>
							<img
								src={`data:image/jpeg;base64, ${item.image}`}
								style={{ marginTop: '15px' }}
								alt='image'
								width='100%'
							/>
						</div>
					);
				})}
		</div>
	);
}
