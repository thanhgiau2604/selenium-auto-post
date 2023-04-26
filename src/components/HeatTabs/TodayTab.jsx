/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import moment from 'moment/moment';
import { TODAY_INITIAL } from '@/constants';
import { Form, Formik } from 'formik';
import { SelectProject, InputContent, InputHour } from '@/components/Inputs';
import { usePost } from 'src/api';

const TodayTab = () => {
	const todayStr = moment(new Date()).format('YYYY/MM/DD');
	const { postAction, data } = usePost();
	return (
		<div className='today-tab'>
			<p className='today-date'>
				Today is: <span>{todayStr}</span>
			</p>
			<Formik
				initialValues={TODAY_INITIAL}
				onSubmit={async (values, actions) => {
					await postAction([values]);
					actions.setSubmitting(false);
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

export default TodayTab;
