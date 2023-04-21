import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import RangeOption from '../Range/RangeOption';
import { RANGE_INITIAL } from '@/constants';
import RangeDate from '../Range/RangeDate';
import RangeArray from '../Range/RangeArray';
import { getListDate } from '@/utils/index';

const RangeTab = () => {
	const [init, setInit] = useState(RANGE_INITIAL);
	return (
		<div className='range-tab'>
			<RangeOption />
			<Formik
				initialValues={init}
				enableReinitialize
				onSubmit={(values, actions) => {
					console.log(values);
					setTimeout(() => {
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{({ isSubmitting }) => {
					// useEffect(() => {
					// 	setInit({
					// 		start_date: values.start_date,
					// 		end_date: values.end_date,
					// 		data: getListDate(values.start_date, values.end_date).map(d => ({
					// 			content: '',
					// 			hour: 8,
					// 			project: DEFAULT_PROJECT,
					// 		})),
					// 	});
					// }, [values.start_date, values.end_date]);

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
		</div>
	);
};

export default RangeTab;
