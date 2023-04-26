/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import RangeOption from '../Range/RangeOption';
import { RANGE_INITIAL } from '@/constants';
import RangeDate from '../Range/RangeDate';
import RangeArray from '../Range/RangeArray';
import { useRecoilState } from 'recoil';
import { dateOptionsState } from 'src/atoms/dateOptions';
import { usePost } from 'src/api';

const RangeTab = () => {
	const [init, setInit] = useState(RANGE_INITIAL);
	const [option, setOption] = useRecoilState(dateOptionsState);
	const { postAction, data } = usePost();

	const updateOption = value => {
		setOption(value);
	};

	return (
		<div className='range-tab'>
			<RangeOption value={option} updateValue={updateOption} />
			<Formik
				initialValues={init}
				enableReinitialize
				onSubmit={async (values, actions) => {
					await postAction(values.data);
					actions.setSubmitting(false);
				}}
			>
				{({ isSubmitting, errors }) => {
					return (
						<Form>
							<RangeDate />
							<RangeArray />
							<Button
								mt={4}
								colorScheme='teal'
								type='submit'
								isLoading={isSubmitting}
							>
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
			{data &&
				data.map((item, index) => {
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
};

export default RangeTab;
