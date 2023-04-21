import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import moment from 'moment/moment';
import { TODAY_INITIAL } from '@/constants';
import { Form, Formik } from 'formik';
import { SelectProject, InputContent, InputHour } from '@/components/Inputs';

const TodayTab = () => {
	const todayStr = moment(new Date()).format('YYYY/MM/DD');
	return (
		<div className='today-tab'>
			<p className='today-date'>
				Today is: <span>{todayStr}</span>
			</p>
			<Formik
				initialValues={TODAY_INITIAL}
				onSubmit={(values, actions) => {
					console.log(values);
					setTimeout(() => {
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Stack gap={2}>
							<SelectProject />
							<InputContent />
							<InputHour />
						</Stack>

						<Button
							mt={4}
							colorScheme='teal'
							type='submit'
							isLoading={isSubmitting}
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default TodayTab;
